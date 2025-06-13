/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        softpink: '#e4c1f9',
        purp: '#ffc6ff',
        dpurp: '#f7aef8',
        deeppurp: '#832161',
        bordercolor: '#b100e8'
      },
    },
  },
  plugins: [],
}


