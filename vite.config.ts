import { defineConfig } from 'vite'

// Project Pages: https://<user>.github.io/acha-mimo/ — production build must use that base.
// `npm run dev` keeps base '/' so the app stays at http://localhost:5173/.
const pagesRepoBase = '/acha-mimo/'

export default defineConfig(({ command }) => ({
  root: '.',
  publicDir: 'public',
  base: command === 'build' ? pagesRepoBase : '/',
  build: {
    outDir: 'dist',
    emptyDirOutDir: true,
  },
}))
