import { defineConfig } from "windicss/helpers"
import colors from "windicss/colors"

export default defineConfig({
  darkMode: "media",
  theme: {
    fontFamily: {
      sans: ["Plus Jakarta Sans", "sans-serif"]
    },
    colors: {
      red: colors.pink,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.indigo,
      gray: colors.gray,
      dark: colors.dark,
      light: colors.light
    },
    extend: {
      screens: {
        hoverable: { raw: "(hover: hover)" }
      }
    }
  }
})
