/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      },
      colors: {

      },
      boxShadow: {
      },
      backgroundImage: {

      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        "wide": "1440px",
        '2xl': '1536px',
      }

    },
  },
  plugins: [],
  "tailwindCSS.includeLanguages": { "plaintext": "javascript" }
}