import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // Enable polling
      interval: 1000,   // Optional: set the polling interval to 1000ms (1 second)
    },
  },
})
