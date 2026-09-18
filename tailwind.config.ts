import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        slateBlue: {
          50: '#f2f6fa',
          100: '#e1ebf4',
          200: '#c7d9e8',
          300: '#9fbe9',
          400: '#5487b3',
          500: '#2E4C6D', // Primary Slate Blue
          600: '#253e59',
          700: '#1e3147',
          800: '#1b2a3b',
          900: '#182432',
        },
        ivory: {
          DEFAULT: '#FAF8F3', // Primary Canvas Background
          50: '#ffffff',
          100: '#FAF8F3',
          200: '#f3eee2',
          300: '#e9e0cb',
          400: '#d7c7a5',
        },
        gold: {
          DEFAULT: '#C9A227', // Accent Gold
          light: '#e5be42',
          dark: '#a8851b',
          subtle: '#fef7e6',
        },
        trustGreen: {
          DEFAULT: '#3E7C59', // Trust Green
          light: '#4d986e',
          dark: '#2e5d42',
          bg: '#eff7f2',
        },
      },
      fontFamily: {
        heading: ['var(--font-poppins)', 'sans-serif'],
        body: ['var(--font-source-sans)', 'sans-serif'],
      },
      boxShadow: {
        'card-soft': '0 10px 30px -5px rgba(46, 76, 109, 0.08)',
        'card-hover': '0 20px 40px -10px rgba(46, 76, 109, 0.15)',
        'photo-card': '0 12px 35px -8px rgba(46, 76, 109, 0.2), 0 0 0 1px rgba(201, 162, 39, 0.25)',
      },
    },
  },
  plugins: [],
};

export default config;
