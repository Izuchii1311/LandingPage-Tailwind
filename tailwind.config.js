/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      fontFamily: {
        header: 'Poppins, sans-serif',
        content: 'Montserrat, sans-serif'
      },
      colors: {
        primary: '#FFEA11',
        secondary: '#2192FF'
      },
    },
  },
  plugins: [],
}

