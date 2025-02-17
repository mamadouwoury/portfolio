import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: "#6366F1",
        // primaryHover: "#AEAFF8",
        // button: "#6366F1",
        secondary: "#FACC15",
        light: {
          background: "#F9FAFB",
          text: "#1E1E1E",
          border: "#E5E7EB",
        },
        dark: {
          background: "#1a202c",
          text: "#ffffff",
          border: "#E5E7EB",
        },
      },
      // Optional: Add custom transitions
      transitionProperty: {
        colors:
          "background-color, color, border-color, text-decoration-color, fill, stroke",
      },
      animation: {
        "theme-transition": "theme-change 0.3s ease-in-out",
      },
      keyframes: {
        "theme-change": {
          "0%": { opacity: "0.8" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
