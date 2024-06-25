/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      'primary':'#6248ff',
      'secondary1': '#ac50ef',
      'secondary2': '#7059fb',
      'secondary3': '#2ecff6',
    }
  },
  plugins: [],
}