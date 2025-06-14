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
        backg: '#d9dcd6',
        compbg: '#faf3dd',
        deeppurp: '#832161',
        bordercolor: '#b88b4a',
        new : '#e9ecef',
        compobdr: '#6c757d'
      },
    },
  },
  plugins: [],
}


