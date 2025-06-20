// @ts-check
import { defineConfig } from 'astro/config';
import { remarkPlugins, rehypePlugins } from './remark/plugins';
import react from '@astrojs/react';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';
import devtoolsJson from 'vite-plugin-devtools-json';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), icon()],

  vite: {
    plugins: [
      tailwindcss(),
      devtoolsJson()
    ]
  },

  markdown: {
    remarkPlugins: remarkPlugins,
    rehypePlugins: rehypePlugins,
  }
});