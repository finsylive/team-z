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
        green: {
          DEFAULT: "#00DD88",
          dark: "#00A368",
          light: "#E6FAF2",
        },
        black: {
          DEFAULT: "#0A0A0A",
          light: "#1A1A1A",
        },
        gray: {
          DEFAULT: "#F5F5F5",
          dark: "#888888",
        },
        primary: {
          green: "#00DD88",
          "green-deep": "#00A368",
          "green-tint": "#E6FAF2",
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
