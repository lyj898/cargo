import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Deployment target: GitHub Pages with a custom domain (cargoadvisor.sg), see /public/CNAME.
//
// If you are NOT using a custom domain yet and are deploying to the default
// https://<username>.github.io/<repo>/ URL instead, change `site` below and
// uncomment `base`, then delete /public/CNAME.
export default defineConfig({
  site: 'https://cargoadvisor.sg',
  // base: '/cargoadvisor-sg',
  trailingSlash: 'never',
  build: {
    format: 'directory',
  },
  integrations: [sitemap()],
});
