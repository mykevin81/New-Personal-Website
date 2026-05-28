
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#15161a',
          dark: '#1c1d21',
        },
        ink: {
          DEFAULT: '#e8e4dc',
          light: '#9c9890',
        },
        terracotta: {
          DEFAULT: '#e07a4f',
          hover: '#c96538',
        },
        stone: {
          DEFAULT: '#2d2e33',
          dark: '#3a3b40',
        }
      },
      fontFamily: {
        serif: ['Fraunces', 'serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      transitionTimingFunction: {
        'editorial': 'cubic-bezier(0.4, 0, 0.2, 1)',
      }
    },
  },
  plugins: [],
}
