# Sonali Deb - Interactive Portfolio

A premium, highly interactive, and self-contained portfolio website designed for **Sonali Deb (Data Science & Artificial Intelligence Engineer)**.

This portfolio is built using a custom **cream, beige, nude pink, and sweet pink** glassmorphic design system. It features a unique **dual-mode system** allowing live editing and zero-server shareable link generation.

---

## ✨ Features

- **Live Editor Mode**: Double-click or click to edit any text directly on the page. Add and remove projects, skills, certifications, and achievements.
- **Client View Mode**: Lock the site in read-only mode for client presentations. The editor control bar and edit outlines are completely hidden.
- **Zero-Server URL Sharing**: Click "Get Share Link" to GZIP-compress and encode your custom portfolio state into the URL hash. Anyone opening the link will see your customized, read-only layout instantly.
- **Interactive Filtering**: Filter featured engineering projects by stack categories (AI/ML vs. Web Apps).
- **Responsive Animations**: Beautiful background floating blobs, hover-lift card animations, active scrolling indicators, and a responsive hamburger navigation overlay.
- **Privacy First**: No personal contact details (phone/email) are exposed. Clients can request contact via a sliding slide-out connect drawer or external links.

---

## 🛠️ Tech Stack

- **Markup & Structure**: Semantic HTML5
- **Styling**: Modern CSS3 (featuring HSL colors, CSS Grid, clamp() fluid typography, backdrop filters)
- **Logic**: Vanilla JavaScript ES6 (utilizing native `CompressionStream` and `DecompressionStream` APIs)

---

## 🚀 How to Run Locally

1. Clone or download this repository:
   ```bash
   git clone https://github.com/your-username/My-portfolio.git
   ```
2. Open `index.html` directly in your web browser, or spin up a local server:
   ```bash
   python -m http.server 8000
   ```
3. Open `http://localhost:8000` in your browser.
