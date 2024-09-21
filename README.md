# Vue 3 + TypeScript + Vite

### How to start the project
1) Installation
```
npm install
```

2) Running the development server
```
npm run dev
```

### Deploying to GitHub Pages
To deploy your project to GitHub Pages, follow these steps:

1) Build the Project

First, build your project using the following command:

```
npm run build
```

2) Add the dist Directory to Git

Next, add the dist directory to your Git repository. Since the dist directory is usually ignored by .gitignore, you need to force add it:

```
git add dist -f
```

3) Commit the Changes

Commit the changes with a descriptive message:
```
git commit -m "build: adding dist"
```

4) Push to gh-pages Branch

Finally, push the contents of the dist directory to the gh-pages branch using Git subtree:



```
git subtree push --prefix dist origin gh-pages
```

5) Full Deployment Script

```
npm run deploy
```
