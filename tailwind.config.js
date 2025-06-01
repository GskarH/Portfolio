/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        'cyber-blue': '#05D8E8',
        'neon-green': '#39FF14',
        'dark-purple': '#2D1B69',
        'matrix-green': '#00FF41',
      },
      animation: {
        'terminal-cursor': 'blink 1s step-end infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
      boxShadow: {
        'neon-glow': '0 0 5px theme(colors.cyan.500), 0 0 20px theme(colors.cyan.500)',
      },
    },
  },
  plugins: [],
};