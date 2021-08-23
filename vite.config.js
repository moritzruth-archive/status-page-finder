import { defineConfig } from "vite"
import vuePlugin from "@vitejs/plugin-vue"
import iconsPlugin from "vite-plugin-icons"
import windiPlugin from "vite-plugin-windicss"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    iconsPlugin(),
    windiPlugin(),
    vuePlugin()
  ],
  css: {
    modules: {
      localsConvention: "camelCaseOnly"
    }
  }
})
