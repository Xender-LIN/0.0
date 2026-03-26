import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#4CAF50',
          600: '#2D7D46',
          700: '#1a5c30',
          800: '#14532d',
          900: '#052e16',
        },
        gold: {
          300: '#d4a84b',
          400: '#C4963C',
          500: '#b8860b',
          600: '#996f0a',
        },
      },
      fontFamily: {
        sans: ['"Noto Sans TC"', 'sans-serif'],
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}
export default config
