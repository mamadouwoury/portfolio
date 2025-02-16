import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        // Optional: Add custom colors for dark mode
        dark: {
          background: '#1a202c',
          text: '#ffffff',
        },
        light: {
          background: '#ffffff',
          text: '#000000',
        }
      },
      // Optional: Add custom transitions
      transitionProperty: {
        'colors': 'background-color, color, border-color, text-decoration-color, fill, stroke',
      },
      animation: {
        'theme-transition': 'theme-change 0.3s ease-in-out',
      },
      keyframes: {
        'theme-change': {
          '0%': { opacity: '0.8' },
          '100%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}

export default config