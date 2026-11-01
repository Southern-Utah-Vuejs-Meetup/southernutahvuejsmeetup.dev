# southernutahvuejsmeetup.dev
 
The official website for the **Southern Utah Vue.js Meetup**, a local community group for developers in southern Utah who build with (or are curious about) Vue.js and the modern frontend ecosystem.
 
🌐 **Live site:** [southernutahvuejsmeetup.dev](https://southernutahvuejsmeetup.dev)
 
## Purpose
 
This site is the meetup's home on the web. It is currently a **"coming soon" page** and will grow into the place where members can:
 
- Find out about upcoming meetups, talks, and workshops
- Browse past presentations, slides, and recordings
- Learn how to attend, speak, or sponsor
- Connect with other Vue developers in the region
The site is also a community project in its own right. It is built with Vue, and meetup members are welcome to contribute, making it a practical place to try out ideas and learn alongside each other.
 
## Tech stack
 
| Area      | Tools                                                     |
| --------- | --------------------------------------------------------- |
| Framework | [Vue 3](https://vuejs.org/) with `<script setup>` and TypeScript |
| Build     | [Vite](https://vitejs.dev/)                               |
| Routing   | [Vue Router](https://router.vuejs.org/)                   |
| i18n      | [Vue I18n](https://vue-i18n.intlify.dev/)                 |
| UI        | [Vuestic UI](https://vuestic.dev/) + Sass                 |
| Testing   | [Vitest](https://vitest.dev/)                             |
| Hosting   | [Cloudflare Workers](https://developers.cloudflare.com/workers/static-assets/) (static assets) |
 
## Getting started
 
**Requirements:** Node.js 18 or newer and npm.
 
```bash
git clone https://github.com/Southern-Utah-Vuejs-Meetup/southernutahvuejsmeetup.dev.git
cd southernutahvuejsmeetup.dev
npm install
npm run dev
```
 
The dev server prints a local URL (usually http://localhost:5173).
 
### Scripts
 
| Command             | What it does                                         |
| ------------------- | ---------------------------------------------------- |
| `npm run dev`       | Start the Vite dev server with hot reload            |
| `npm run build`     | Type-check with `vue-tsc` and build to `dist/`       |
| `npm run preview`   | Serve the production build locally                   |
| `npm run test:unit` | Run unit tests with Vitest                           |
 
## Project structure
 
```
.
├── public/          Static files copied as-is into the build
├── src/             Vue app source (components, views, router, i18n)
├── index.html       App entry HTML
├── vite.config.ts   Vite configuration
├── wrangler.toml    Cloudflare Workers deployment config
└── .github/         GitHub Actions workflows
```
 
## Deployment
 
The site is deployed to Cloudflare Workers using static assets. Cloudflare's GitHub integration builds and deploys automatically on every push to `main`.
 
- **Build command:** `npm run build`
- **Deploy command:** `npx wrangler deploy`
- **Output directory:** `dist/` (configured in `wrangler.toml`)
`wrangler.toml` sets `not_found_handling = "single-page-application"`, so any unknown path serves `index.html` and Vue Router handles the route client-side.
 
## Contributing
 
Contributions from meetup members and the wider Vue community are welcome.
 
1. Fork the repo and create a branch from `main`
2. Make your change and confirm `npm run build` and `npm run test:unit` pass
3. Open a pull request describing what you changed and why
Ideas, bugs, or suggestions for the site? [Open an issue](https://github.com/Southern-Utah-Vuejs-Meetup/southernutahvuejsmeetup.dev/issues).
 
## Recommended editor setup
 
[VS Code](https://code.visualstudio.com/) with the official [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) extension (formerly Volar). Disable Vetur if you have it installed.
 
