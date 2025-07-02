# Minimal Modular React Portfolio

This is a minimal, modular React portfolio template optimized for GitHub Pages (`kr-ab.github.io`).

## 🚀 How to Use

1. **Edit your profile**
   - Open `public/profile.json` and fill in your details (name, job title, about, experience, education, skills, projects, social links, etc).
   - Replace `public/profile.jpeg` with your own photo (optional).
   - Replace `public/resume.pdf` with your own ATS-compliant resume.

2. **Run Locally**
   ```sh
   npm install
   npm start
   ```
   Visit `http://localhost:3000` to preview your site.

3. **Deploy to GitHub Pages**
   - Push to `main` or `master` branch. GitHub Actions will auto-deploy to `gh-pages` branch and publish at `https://kr-ab.github.io/`.

## 🛠️ Customization
- All icons are in `public/assets/icons/` (SVG format).
- Colors and fonts can be changed in `src/App.css`.
- The site is fully static—no backend required.

## 📦 Project Structure
- `public/` — static assets, `profile.json`, icons, resume, etc.
- `src/` — React components and styles.
- `.github/workflows/deploy.yml` — GitHub Actions for auto-deploy.

## 📄 License
MIT or your preferred license.
