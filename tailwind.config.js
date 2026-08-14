/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          400: '#f6d365',
          500: '#d4af37',
          600: '#aa8c2c',
          700: '#856c1e',
        },
        obsidian: '#0b0b0b',
        darkcard: '#141416',
        darkborder: '#26262a',
        burgundy: {
          600: '#b91c1c',
          800: '#881337',
          900: '#4c0519',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.25)',
        'red-glow': '0 0 25px rgba(185, 28, 28, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-pulse': 'glowPulse 2s infinite alternate',
      },
      keyframes: {
        glowPulse: {
          '0%': { boxShadow: '0 0 10px rgba(212, 175, 55, 0.2)' },
          '100%': { boxShadow: '0 0 30px rgba(212, 175, 55, 0.6)' },
        }
      }
    },
  },
  plugins: [],
}
