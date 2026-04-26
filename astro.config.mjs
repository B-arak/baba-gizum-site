import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// אם תחבר דומיין מותאם, תעדכן את ה-site בהתאם
export default defineConfig({
  site: 'https://www.babagizum.com',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap()
  ],
  i18n: {
    defaultLocale: 'he',
    locales: ['he']
  },
  build: {
    inlineStylesheets: 'auto'
  }
});
