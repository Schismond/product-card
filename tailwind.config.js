
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      backgroundImage: {
        'product': "url('/images/image-product-desktop.jpg')",
      }
    },
    fontFamily: {
      'Montserrat': 'Montserrat , Arial, sans-serif',
      'Fraunces': 'Fraunces , Arial, sans-serif',
    },
  },
  plugins: [],
}