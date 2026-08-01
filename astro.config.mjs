import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// --- Deployment target -----------------------------------------------------
// Currently configured for the default GitHub Pages URL (no custom domain
// bought yet): https://lyj898.github.io/cargo
//
// Once cargoadvisor.sg is bought and DNS is pointed at GitHub Pages, switch
// to the custom-domain block below, restore /public/CNAME (see
// /public/CNAME.example), and update `site.url` in src/config/site.ts to
// match `site` here. Every internal link in the codebase goes through
// `withBase()` (src/config/site.ts), so this is the only place that needs
// to change either way.
// -----------------------------------------------------------------------

// Custom domain (once cargoadvisor.sg DNS is live):
// export default defineConfig({
//   site: 'https://cargoadvisor.sg',
//   trailingSlash: 'never',
//   build: { format: 'directory' },
//   integrations: [sitemap()],
// });

// GitHub Pages default URL (current):
export default defineConfig({
  site: 'https://lyj898.github.io',
  base: '/cargo',
  trailingSlash: 'never',
  build: {
    format: 'directory',
  },
  integrations: [sitemap()],
});
