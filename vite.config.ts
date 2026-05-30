import { defineConfig } from '@tanstack/start/config'

export default defineConfig({
  start: {
    // Kita hapus dulu adapter-nya biar build-nya nggak error
    // Nanti kita tambahin lagi kalau udah ketemu adapter yang bener
  },
})