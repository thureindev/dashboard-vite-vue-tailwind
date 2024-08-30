# Dashboard Vite Vue Tailwind

## Getting Started!

Welcome to the template! This guide will help you get started quickly and make the most out of this setup. [Go to About page](./ABOUT.md) for more details about this template.

### Prerequisites

Before you begin, you should have a basic understanding of Vue.js. This template is built with Vue.

### Setup Instructions

- Clone this repository to your local machine.</li>
- Change git remote to our own repo.

```bash
git remote remove origin
git remote add origin <yourRemoteUrl>
git push -u origin main
```

- In the `router.js` file, update the list `navRoutes`. Add
  or remove routes and components from the JavaScript list as needed.
- Modify the components in the `src/components` directory to suit your project
  requirements.

> _At this point, your setup is complete, and you can start using the template as you wish. Continue reading if you want to follow instruction to deploy your project._

### Deploying on GitHub Pages

- Update the `base` URL in `vite.config.js` to match your github repository name.

#### vite.config.js

```javascript
export default defineConfig({
  base: "/yourrepo/", // Update this to your github repo name
  plugins: [vue()],
});
```

- Go to your GitHub Pages configuration in the repository settings page and choose the source of deployment as "GitHub Actions".

> _Now your project should be deployed. Check your GitHub Action to see the deployment workflow._

For more details, refer to [Vite guide on GitHub Pages.](https://vitejs.dev/guide/static-deploy#github-pages)

For other deployment sites, check out Vite’s guide on deployment for:

- [GitLab Pages and GitLab CI](https://vitejs.dev/guide/static-deploy#gitlab-pages-and-gitlab-ci)

- [Netlify](https://vitejs.dev/guide/static-deploy#netlify)

- [Vercel](https://vitejs.dev/guide/static-deploy#vercel)

- [Render](https://vitejs.dev/guide/static-deploy#render)
