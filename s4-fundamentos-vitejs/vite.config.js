import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    manifest: {
      name: "Aplication Vite PWA",
      short_name: "Vite y PWA",
      theme_color: "#84b6f4",
      background_color: "#b0f2c2",
      description: "Prueba aplication con vite y PWA",
      lang: "es",
      icons: [
        {
          src: "./assets/favicon.svg",
          sizes: "64x64",
          type: "image/svg+xml",
          purpose: "maskable",
        }
      ]
    }
  })]
})
