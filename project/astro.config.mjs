import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/your-repo-name',
  build: {
    assets: 'assets'
  }
});