/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
      primary: ['Montserrat', 'sans-serif'],
      secondary: ['Fraunces', 'serif'],
      },
      backgroundImage: {
        'img': "url('/images/image-product-desktop.jpg')",
      }
    }
  },
  plugins: [],
}

