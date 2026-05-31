import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteImagemin from 'vite-plugin-imagemin'

export default defineConfig({
  plugins: [
    react(),
    viteImagemin({
      mozjpeg: {
        quality: 80,
      },
      optipng: {
        optimizationLevel: 5,
      },
      pngquant: {
        quality: [0.65, 0.9],
        speed: 4,
      },
      webp: {
        quality: 80,
      },
    }),
  ],
  base: '/meganpricephotog/',
})
