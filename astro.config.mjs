import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// --- Deployment target -----------------------------------------------------
// Live on the custom domain swyftclear.com (DNS + /public/CNAME configured).
//
// To fall back to the default GitHub Pages URL instead, use the block below,
// remove /public/CNAME, and update `site.url` in src/config/site.ts to
// match `site` here. Every internal link in the codebase goes through
// `withBase()` (src/config/site.ts), so this is the only place that needs
// to change either way.
// -----------------------------------------------------------------------

// GitHub Pages default URL (fallback, no custom domain):
// export default defineConfig({
//   site: 'https://lyj898.github.io',
//   base: '/cargo',
//   trailingSlash: 'never',
//   build: { format: 'directory' },
//   integrations: [sitemap()],
// });

// Custom domain (current):
export default defineConfig({
  site: 'https://swyftclear.com',
  trailingSlash: 'never',
  build: {
    format: 'directory',
  },
  integrations: [sitemap()],
});
