# React App Deployment to GitHub Pages 🚀

This project demonstrates how to deploy a React application to **GitHub Pages**.

---

## 📦 Steps to Deploy

### 1. Create React App
If you don’t already have a React project:
```bash
npx create-react-app my-app
cd my-app

```
2. . Push Code to GitHub

Create a repository on GitHub (example: my-app) and push your code:

```bash

git init
git remote add origin https://github.com/<your-username>/my-app.git
git branch -M main
git add .
git commit -m "Initial commit"
git push -u origin main

```
3. Install gh-pages

Install the deployment package:

```bash
npm install gh-pages --save-dev

```

4. Update package.json

1. Add the homepage field at the top level:

```bash

"homepage": "https://<your-username>.github.io/my-app"

```
2. Add deployment scripts under "scripts":

```json

"predeploy": "npm run build",
"deploy": "gh-pages -d build"

```

Example:

```json

"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
 
```

5. Deploy to GitHub Pages

Run the following command:

```bash

npm run deploy

```
### This will:

- Build your app
- Push it to the gh-pages branch
- Make it live at your GitHub Pages URL

6. Enable GitHub Pages

- Go to your repository on GitHub → Settings → Pages
- Under Source, select branch: gh-pages and folder: / (root)
- Click Save

### 🌍 Your App is Live!

- Your React app will be available at:
- https://<your-username>.github.io/my-app

### Updating the App

- Whenever you make changes:

```bash

git add .
git commit -m "Update app"
git push origin main
npm run deploy

```
