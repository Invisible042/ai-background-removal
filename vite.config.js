import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/



export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  proxy: {
    '/api': {
      target: 'http://localhost:5000',
      changeOrigin: true,
      // Optionally remove '/api' from the URL
      // rewrite: (path) => path.replace(/^\/api/, '')
    }
  }
})

