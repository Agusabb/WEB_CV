# 📇 CV Web — Agustín Sabbione

My CV as an interactive website: a professional dossier built with **React + Vite + Tailwind CSS v4**.

> Data Analyst · Qlik Developer · PhD in Agricultural Sciences.
> Experience, research & publications, IT skills, education and contact — with light/dark theme,
> scroll animations and one-click PDF export via `Ctrl/Cmd + P`.

## ✏️ Edit your data

The whole site reads from **a single file**: [`src/data/cv.ts`](src/data/cv.ts).
Change your name, experience, research, skills, courses and links there — nothing else needs to change.

```
src/
├── data/cv.ts          ← 📌 YOUR CV: edit only this file
├── components/         ← Sections (Hero, Experience, Research, Stack…)
├── hooks.ts            ← Animations: scramble, reveal, scrollspy, theme
├── App.tsx
└── index.css           ← Palette, fonts and print styles
```

## 🚀 Run locally

```bash
npm install
npm run dev
```

## 📦 Push to GitHub

```bash
git init
git add .
git commit -m "feat: CV Web — interactive curriculum"
git branch -M main
git remote add origin https://github.com/YOUR-USER/CV-Web.git
git push -u origin main
```

## 🌍 Deploy for free

### GitHub Pages — zero local setup ⭐

1. Upload this repo to GitHub (web UI or `git push`).
2. In the repo, go to **Settings → Pages → Source** and select **GitHub Actions**.
3. Wait ~1–2 minutes: the workflow in `.github/workflows/deploy.yml`
   builds the site and publishes it at `https://YOUR-USER.github.io/CV-Web/`.

Every future `git push` (or web upload) redeploys automatically.

### Alternatives

- **Vercel / Netlify**: connect the repo and deploy (build: `npm run build`, output: `dist`).

## 🧾 CV as PDF

The **"PDF CV"** button (or `Ctrl/Cmd + P`) uses dedicated print styles:
the site becomes a clean black-on-white document, ready to send.

---

Built with React 18 · Vite 6 · Tailwind CSS 4 · Syne, Sora & JetBrains Mono.
