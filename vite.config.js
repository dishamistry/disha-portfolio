import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

/**
 * Works out the public base path for GitHub Pages.
 *
 * - `VITE_BASE_PATH` always wins if you set it explicitly.
 * - In GitHub Actions, `GITHUB_REPOSITORY` ("owner/repo") is set automatically:
 *     - a user site repo ("dishamistry.github.io") is served from "/"
 *     - any other repo ("disha-portfolio") is served from "/disha-portfolio/"
 * - Locally the site is served from "/".
 */
function resolveBase() {
  if (process.env.VITE_BASE_PATH) return process.env.VITE_BASE_PATH

  const repo = process.env.GITHUB_REPOSITORY?.split('/')[1]
  if (!repo || repo.endsWith('.github.io')) return '/'

  return `/${repo}/`
}

export default defineConfig({
  base: resolveBase(),
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
