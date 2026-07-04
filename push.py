import os
import sys
import subprocess
import urllib.request
import urllib.error
import json

def load_env():
    env = {}
    if os.path.exists('.env'):
        with open('.env', 'r', encoding='utf-8') as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith('#') and '=' in line:
                    k, v = line.split('=', 1)
                    env[k.strip()] = v.strip()
    return env

def main():
    print("🚀 Initializing GitHub push sequence...")
    env = load_env()
    
    token = env.get('GITHUB_TOKEN')
    username = env.get('GITHUB_USERNAME')
    
    if not token or not username:
        print("❌ Error: GITHUB_TOKEN or GITHUB_USERNAME is missing from .env file.")
        print("Please configure them and run this script again.")
        sys.exit(1)

    repo_name = "My-portfolio"
    
    # 1. Create Repository via GitHub API
    print(f"📦 Creating GitHub repository '{repo_name}' for user '{username}'...")
    url = "https://api.github.com/user/repos"
    headers = {
        "Authorization": f"token {token}",
        "Accept": "application/vnd.github.v3+json",
        "Content-Type": "application/json"
    }
    data = {
        "name": repo_name,
        "description": "Interactive and editable web portfolio for Sonali Deb (AI & ML Engineer)",
        "private": False,
        "has_issues": True,
        "has_projects": True,
        "has_wiki": True
    }
    
    req = urllib.request.Request(url, data=json.dumps(data).encode('utf-8'), headers=headers, method='POST')
    
    try:
        with urllib.request.urlopen(req) as response:
            res_data = json.loads(response.read().decode('utf-8'))
            print("✅ Repository created successfully on GitHub!")
    except urllib.error.HTTPError as e:
        res_body = e.read().decode('utf-8')
        try:
            err_json = json.loads(res_body)
            # If repo already exists, we skip creation
            if any(err.get('message') == 'name already exists on this account' for err in err_json.get('errors', [])):
                print("ℹ️ Repository already exists on your GitHub account. Proceeding to push...")
            else:
                print(f"❌ GitHub API Error: {err_json.get('message')}")
                sys.exit(1)
        except Exception:
            print(f"❌ Failed to create repository. HTTP Status: {e.code}")
            sys.exit(1)
    
    # 2. Run Git operations
    print("🔧 Running local Git operations...")
    try:
        # Check if already a git repo
        if not os.path.exists('.git'):
            subprocess.run(["git", "init"], check=True)
            print("Initialized empty Git repository.")
        
        # Configure local dummy email/name if not set (to prevent commit failures)
        # We check if config exists
        res_name = subprocess.run(["git", "config", "user.name"], capture_output=True, text=True)
        if not res_name.stdout.strip():
            subprocess.run(["git", "config", "user.name", username], check=True)
            subprocess.run(["git", "config", "user.email", f"{username}@users.noreply.github.com"], check=True)

        subprocess.run(["git", "add", "."], check=True)
        # Create initial commit
        subprocess.run(["git", "commit", "-m", "Initial commit: Sonali Deb Interactive Portfolio"], check=True)
        # Rename branch to main
        subprocess.run(["git", "branch", "-M", "main"], check=True)
        
        # Add remote with token
        remote_url_with_auth = f"https://{username}:{token}@github.com/{username}/{repo_name}.git"
        
        # Check if remote origin already exists
        remotes = subprocess.run(["git", "remote"], capture_output=True, text=True)
        if "origin" in remotes.stdout:
            subprocess.run(["git", "remote", "remove", "origin"], check=True)
            
        subprocess.run(["git", "remote", "add", "origin", remote_url_with_auth], check=True)
        print("Configured remote origin.")
        
        # Push to GitHub
        print("📤 Pushing commit to GitHub 'main' branch...")
        subprocess.run(["git", "push", "-u", "origin", "main"], check=True)
        print("✅ Push completed successfully!")
        
        # 3. Clean up credentials from git config
        clean_remote_url = f"https://github.com/{username}/{repo_name}.git"
        subprocess.run(["git", "remote", "set-url", "origin", clean_remote_url], check=True)
        print("🔒 Cleaned up access tokens from local Git configuration.")
        print(f"\n🎉 Your portfolio is live on GitHub at: https://github.com/{username}/{repo_name}")
        
    except subprocess.CalledProcessError as e:
        print(f"❌ Git Command Failed: {e}")
        # Cleanup remote url just in case
        try:
            clean_remote_url = f"https://github.com/{username}/{repo_name}.git"
            subprocess.run(["git", "remote", "set-url", "origin", clean_remote_url])
        except Exception:
            pass
        sys.exit(1)

if __name__ == '__main__':
    main()
