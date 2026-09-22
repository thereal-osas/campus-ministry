import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { copyFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig, type Plugin } from 'vite'

/** Static hosts (e.g. GitHub Pages) serve 404.html for unknown paths — copy SPA entry so deep links boot the router. */
function spaFallback(): Plugin {
  return {
    name: 'spa-fallback-404',
    closeBundle() {
      const indexHtml = resolve(__dirname, 'dist/index.html')
      if (existsSync(indexHtml)) {
        copyFileSync(indexHtml, resolve(__dirname, 'dist/404.html'))
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), spaFallback()],
  // Keep source asset fidelity — do not recompress imported images at build time
  build: {
    assetsInlineLimit: 0,
  },
})
