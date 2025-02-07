import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: "postcss.config.cjs",
  },
})

// import { defineConfig } from "vite";

// export default defineConfig({
//   css: {
//     postcss: "postcss.config.cjs",
//   },
// });
