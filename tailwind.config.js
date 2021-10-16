module.exports = {
  purge: {
    content : ['./public/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'blue-1' : '#0048A6',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
       },
       fontFamily: {
        'poppins': [ 'Poppins', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
