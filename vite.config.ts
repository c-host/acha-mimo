import { defineConfig } from 'vite'

// GitHub Pages project URL is https://<user>.github.io/<repo>/ — set base to '/<repo>/'.
// For a custom domain or user site at the domain root, keep base: '/'.
export default defineConfig({
  root: '.',
  publicDir: 'public',
  base: '/',
  build: {
    outDir: 'dist',
    emptyDirOutDir: true,
  },
})
