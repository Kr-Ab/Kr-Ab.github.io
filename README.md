# React Portfolio Template

This is a React-based, JSON-driven personal portfolio template ready for GitHub Pages deployment.

## 🚀 How to Use

1. **Edit your profile**
   - Open `public/profile.json` and fill in your details (name, job title, about, experience, education, skills, projects, social links, etc).
   - Replace `public/profile.jpg` with your own photo (optional).

2. **Resume Download**
   - Replace `public/resume.pdf` with your own ATS-compliant resume. The download button will always link to this file.

3. **Run Locally**
   ```sh
   npm install
   npm start
   ```
   Visit `http://localhost:3000` to preview your site.

4. **Deploy to GitHub Pages**
   - Set your `homepage` in `package.json` to `https://yourusername.github.io/`.
   - Run:
     ```sh
     npm run publish
     ```
   - Your site will be live at `https://yourusername.github.io`.

## 🛠️ Customization
- All icons are in `public/assets/icons/` (SVG format).
- Colors and fonts can be changed in `src/App.css` or your custom CSS.
- The site is fully static after build—no backend required.

## 📄 License
MIT or your preferred license.
