import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          green: "#a8f348",
        },
        text: {
          light: "#ffffff",
          dark: "#1a1a1a",
        },
        background: "#f2f2f4",
        overlay: "rgba(30, 30, 30, 0.75)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        "4xl": "40px",
      },
    },
  },
  plugins: [],
} satisfies Config;
