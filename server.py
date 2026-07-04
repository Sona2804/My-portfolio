import http.server
import socketserver
import json
import os
import subprocess

PORT = 8000

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def do_POST(self):
        if self.path == '/save':
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            try:
                payload = json.loads(post_data.decode('utf-8'))
                
                # Write to data.js
                with open('data.js', 'w', encoding='utf-8') as f:
                    f.write("window.PORTFOLIO_DATA = ")
                    json.dump(payload, f, indent=4, ensure_ascii=False)
                    f.write(";\n")
                
                print("💾 Saved changes directly to data.js")
                self.send_response(200)
                self.send_header('Content-type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                response = {"status": "success", "message": "Saved successfully to local disk!"}
                self.wfile.write(json.dumps(response).encode('utf-8'))
            except Exception as e:
                print(f"❌ Save error: {e}")
                self.send_response(500)
                self.send_header('Content-type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({"status": "error", "message": str(e)}).encode('utf-8'))
                
        elif self.path == '/push':
            print("🚀 Received publish to GitHub request...")
            try:
                # Add Git command path to environ in case it's missing
                git_path = r"C:\Program Files\Git\cmd"
                env = os.environ.copy()
                if git_path not in env["PATH"]:
                    env["PATH"] += os.pathsep + git_path
                
                # Run Git status to ensure it's a repository
                subprocess.run(["git", "add", "data.js"], check=True, env=env)
                subprocess.run(["git", "commit", "-m", "Update portfolio content via Web Editor"], check=True, env=env)
                
                print("📤 Pushing to remote main...")
                subprocess.run(["git", "push", "origin", "main"], check=True, env=env)
                
                print("✅ Published successfully to GitHub!")
                self.send_response(200)
                self.send_header('Content-type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                response = {"status": "success", "message": "Changes saved and pushed to GitHub main branch!"}
                self.wfile.write(json.dumps(response).encode('utf-8'))
            except Exception as e:
                print(f"❌ Git Push failed: {e}")
                self.send_response(500)
                self.send_header('Content-type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({"status": "error", "message": str(e)}).encode('utf-8'))
        else:
            self.send_response(404)
            self.end_headers()

    # Override OPTIONS to support CORS if needed
    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

if __name__ == '__main__':
    print(f"Starting Custom Server on http://localhost:{PORT}")
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), CustomHandler) as httpd:
        httpd.serve_forever()
