// @ts-check
import { defineConfig, envField } from 'astro/config';
import { remarkPlugins, rehypePlugins } from './remark/plugins';
import react from '@astrojs/react';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';
import devtoolsJson from 'vite-plugin-devtools-json';

import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), icon(), starlight({
    title: 'LiverHawk Profile'
  })],

  vite: {
    plugins: [
      tailwindcss(),
      devtoolsJson()
    ]
  },

  markdown: {
    remarkPlugins: remarkPlugins,
    rehypePlugins: rehypePlugins,
  },
  env: {
    schema: {
      MERLIN_CODE: {
        type: "string",
        context: "server",
        access: "secret",
        default: "MERLIN20"
      },
    },
  }
});