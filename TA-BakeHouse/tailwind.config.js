/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        softpink: "#e4c1f9",
        backg: "#d9dcd6",
        compbg: "#faf3dd",
        deeppurp: "#832161",
        bordercolor: "#b88b4a",
        new: "#e9ecef",
        compobdr: "#6c757d",
        brown: "#7f5539",
        orang: "#da627d",
        adminbg: "#e2eafc",
        welcome: "#023e7d",
        bggreenhover: "#52b69a",
        bggreen: "#83c5be",
        bgorangehover: "#ff8800",
        bgpink: '#ff758f',
        bgpinkhover:'#f26a8d',
        borderbrown: '#34a0a4',
        bgnew: '#e3f2fd',
        bguser: '#ece4db',
        userborder: '#b6ad90',
        bgblack: '#a99985',
        hm: '#805b10'
       // newbg : '#cdeafb'
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(50px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.8s ease-out forwards",
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
