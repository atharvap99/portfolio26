import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio26',
  build: {
    // Keep the built files easy to recognize and inspect in VS Code.
    minify: false,
    cssMinify: false,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/portfolio-[hash].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: (asset) => {
          if (asset.name?.endsWith('.css')) {
            return 'assets/portfolio-[hash].css'
          }

          return 'assets/[name]-[hash][extname]'
        },
      },
    },
  },
})
