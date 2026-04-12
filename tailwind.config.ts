import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E2753",
        secondary: "#1E2753",
        background: "#F5F6FA",
        textPrimary: "#131523",
        success: "#22C55E",
        error: "#EF4444",
      },
    },
  },
  plugins: [],
} satisfies Config;