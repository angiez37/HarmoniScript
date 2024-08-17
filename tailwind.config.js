/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#25e4ff',
        'secondary': '#004F98',
      }
    },
  },
  plugins: [],
}


