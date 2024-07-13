/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 3px 10px rgba(52, 152, 219, 0.2)',
      },
    colors:{
      'primary':'#6248ff',
      'secondary1': '#ac50ef',
      'secondary2': '#7059fb',
      'secondary3': '#2ecff6',
    },
    animation: {
      'infinite-scroll': 'infinite-scroll 15s linear infinite',
    },
    keyframes: {
      'infinite-scroll': {
        from: { transform: 'translateX(0)' },
        to: { transform: 'translateX(-100%)' },
      }
    }
  },
  },
  plugins: [],
}