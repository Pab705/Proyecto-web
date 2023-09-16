import path from 'path';
import { defineConfig } from 'vite'
import inject from "@rollup/plugin-inject";

export default defineConfig({
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  plugins: [
       inject({   // => that should be first under plugins array
         $: 'jquery',
         jQuery: 'jquery',
       }),
  ],
})