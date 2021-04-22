module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#3c6687',
      'secondary': '#4b7495',
     }),
     textColor: theme => ({
       ...theme('colors'),
       'primary': '#899fb0',
       'secondary': '#cbd9e5',
     }),
    extend: {
      backgroundImage: theme => ({
        'hot-ballon': "url('/hot_air_ballon.jpg') ",
      }),
      backgroundPosition:{
        'top-4':'80%  center'
      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
