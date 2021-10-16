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
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
        20: "20px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
