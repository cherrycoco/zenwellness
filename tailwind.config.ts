import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFCFA',
          100: '#F7F4EF',
          200: '#EDE8E0',
          300: '#DDD5C8',
        },
        olive: {
          50: '#f5f6f3',
          100: '#e6e9e2',
          200: '#cdd4c6',
          300: '#a8b49d',
          400: '#8B9A7D',
          500: '#6b7d5e',
          600: '#546447',
          700: '#434f39',
          800: '#384130',
          900: '#2f3629',
        },
        terracotta: {
          300: '#ecac8b',
          400: '#C1846B',
          500: '#b06a4e',
        },
        sand: {
          100: '#f0ebe0',
          200: '#e0d5c2',
          300: '#D4B896',
          400: '#c9a578',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Playfair Display', 'serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'draw-line': 'drawLine 1.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        drawLine: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
    },
  },
  plugins: [],
}
export default config
