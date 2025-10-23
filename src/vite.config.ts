import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(async () => {
  let imageToolsPlugin: any = null
  try {
    const mod = await import('vite-imagetools')
    imageToolsPlugin = mod.imagetools()
  } catch (e) {
    // Plugin not installed; skip to keep dev/build working
  }

  return {
    plugins: [react(), ...(imageToolsPlugin ? [imageToolsPlugin] : [])],
  }
})
