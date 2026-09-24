# Deploying CipherX to Vercel

This repository has been fully configured for **1-click deployment on Vercel**.

---

### Option 1: Deploy via GitHub & Vercel Dashboard (Recommended)

1. **Push this folder to a GitHub repository**:
   ```bash
   git init
   git add .
   git commit -m "feat: CipherX portfolio ready for Vercel"
   git branch -M main
   git remote add origin <YOUR_GITHUB_REPO_URL>
   git push -u origin main
   ```

2. **Import into Vercel**:
   - Go to [vercel.com/new](https://vercel.com/new).
   - Select your GitHub repository.
   - **Framework Preset**: Vercel will automatically detect `Vite`.
   - **Root Directory**: Leave as `./` (the root). The included [`vercel.json`](./vercel.json) automatically directs Vercel to install dependencies, run the Vite build, and deploy the dist folder.
   - Click **Deploy**.

---

### Option 2: Deploy using Vercel CLI

Run the following command directly in this folder:
```bash
npx vercel
```
For production release:
```bash
npx vercel --prod
```

---

### Included Vercel Configurations
- **Root [`vercel.json`](./vercel.json)**: Handles automated installation and Vite production build pointing to `React-Personal-Portfolio-main/Ashif/dist`.
- **SPA Rewrites**: Automatically redirects client-side routes to `/index.html` preventing 404s on refresh.
- **Cache Headers**: Configures long-term immutable caching (`Cache-Control: public, max-age=31536000, immutable`) for assets.
- **Node Engine**: Specifies Node `>=18.0.0` for full Vite 7 and React 19 compatibility.
- **`.gitignore`**: Prevents `node_modules`, `.vercel`, and build outputs from being tracked in git.
