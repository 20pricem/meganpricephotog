# Photography Portfolio

A clean, dark editorial portfolio site built with React + Vite. Deploys automatically to GitHub Pages.

---

## Quick Setup (5 steps)

### 1. Personalize the site

Search for `Your Name` and `you@example.com` across the project and replace with your real name and email:
- `src/components/Nav.jsx`
- `src/components/Hero.jsx`
- `src/components/Footer.jsx`

### 2. Set the correct base URL in `vite.config.js`

Open `vite.config.js` and update the `base` field:

```js
// If your repo is github.com/yourusername/photography
// and your site will be at yourusername.github.io/photography/
base: '/photography/',

// If your repo IS yourusername.github.io (your root site)
base: '/',
```

### 3. Update `package.json` homepage (optional, for `npm run deploy`)

```json
"homepage": "https://yourusername.github.io/photography"
```

### 4. Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/yourusername/your-repo-name.git
git push -u origin main
```

### 5. Enable GitHub Pages

In your GitHub repo → **Settings → Pages**:
- Source: **GitHub Actions**

That's it — every push to `main` deploys automatically via the included workflow.

---

## Adding Your Photos

In `src/App.jsx`, each section has an `images` array. Populate it like this:

```js
// Option A — local files (put them in /public/photos/)
images: [
  { src: '/photography/photos/portrait1.jpg', alt: 'Wedding portrait' },
  { src: '/photography/photos/portrait2.jpg', alt: 'Graduation photo' },
]

// Option B — remote URLs
images: [
  { src: 'https://your-cdn.com/photo.jpg', alt: 'Description' },
]
```

The grid layout expects **6 images per section** for the best mosaic effect.
First image is largest (2-col span), last spans full width.

---

## Local Development

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`

---

## Project Structure

```
src/
  components/
    Nav.jsx / Nav.css          ← Fixed top navigation
    Hero.jsx / Hero.css        ← Full-height landing section
    Section.jsx / Section.css  ← Each portfolio category
    PhotoGrid.jsx / PhotoGrid.css ← Mosaic image grid
    Footer.jsx / Footer.css    ← Contact + links
  App.jsx                      ← Section data lives here
  index.css                    ← Global tokens & reset
```
