/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "green":"#39DB4A",
        "red":"#FF6868",
        "pink":"#e2a8b6",
        "lightpink" : "#f4d6d7",
        "secondary":"#555",
        "primary":"#FCFCFC"
      }
      
    },

  },
  plugins: [require('daisyui')],
}

