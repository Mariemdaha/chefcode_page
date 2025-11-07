# Deploy to Render - Step by Step Guide

## Your project is ready! ✅

Git repository has been initialized and all files are committed.

## Deployment Steps

### Step 1: Create GitHub Repository

**Option A: Using GitHub CLI (if installed)**
```bash
gh repo create chefcode-landing --public --source=. --remote=origin --push
```

**Option B: Manual GitHub Setup**
1. Go to https://github.com/new
2. Create a new repository (name it `chefcode-landing` or any name you prefer)
3. **DO NOT** initialize with README, .gitignore, or license (we already have these)
4. Copy the repository URL (e.g., `https://github.com/YOUR_USERNAME/chefcode-landing.git`)

Then run:
```bash
git remote add origin https://github.com/YOUR_USERNAME/chefcode-landing.git
git push -u origin main
```

### Step 2: Deploy on Render

1. **Go to Render Dashboard**
   - Visit: https://dashboard.render.com
   - Sign up or log in (free account works)

2. **Create New Web Service**
   - Click "New +" button
   - Select "Web Service"

3. **Connect Repository**
   - Click "Connect account" if you haven't connected GitHub
   - Authorize Render to access your repositories
   - Select your `chefcode-landing` repository

4. **Configure Service**
   - **Name**: `chefcode-landing` (or any name)
   - **Environment**: `Node`
   - **Build Command**: `npm install` (auto-detected)
   - **Start Command**: `npm start` (auto-detected)
   - **Plan**: Select "Free" plan

5. **Deploy**
   - Click "Create Web Service"
   - Render will automatically:
     - Install dependencies
     - Build your app
     - Deploy it
   - Wait 2-3 minutes for deployment

6. **Your Site is Live! 🎉**
   - Your site will be available at: `https://chefcode-landing.onrender.com`
   - (or whatever name you chose)

## What Happens During Deployment

1. Render clones your GitHub repository
2. Runs `npm install` to install Express.js
3. Runs `npm start` which starts the server.js
4. Your site is live and accessible worldwide!

## Troubleshooting

- **Build fails?** Check the logs in Render dashboard
- **Site not loading?** Make sure `server.js` is in the root directory
- **Port issues?** The server uses `process.env.PORT` which Render sets automatically

## Update Your Site

After making changes:
```bash
git add .
git commit -m "Your commit message"
git push
```

Render will automatically redeploy your site!

