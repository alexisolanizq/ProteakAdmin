import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ['pdfjs-dist/build/pdf'],
  },
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
    },
  },
})
