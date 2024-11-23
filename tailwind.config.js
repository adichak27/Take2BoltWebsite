/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite",
        'slow-drift': 'drift 15s infinite alternate',
        'slow-drift-reverse': 'drift 20s infinite alternate-reverse',
        'pulse-slow': 'pulse 8s infinite',
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        drift: {
          '0%': { transform: 'translate(0px, 0px)' },
          '100%': { transform: 'translate(50px, 30px)' },
        },
      },
    },
  },
  plugins: [],
};