const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./src/**/*.js', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.trueGray,
        indigo: colors.indigo,
        red: colors.rose,
        yellow: colors.amber,
        'gallery': {
          '50': '#fefefe', 
          '100': '#fdfdfd', 
          '200': '#fafafa', 
          '300': '#f7f7f7', 
          '400': '#f1f1f1', 
          '500': '#EBEBEB', 
          '600': '#d4d4d4', 
          '700': '#b0b0b0', 
          '800': '#8d8d8d', 
          '900': '#737373'
      },
    },
    keyframes: {
      'fromLeft':{
        '0%':{transform:'translateX(-10rem)'},
        '100%':{transform:'translateX(0rem)',opacity:'1',},
      },
    },

    animation:{
      'fromLeft':'fromLeft 123ms ease-out forwards',
    },
  },
  variants: {
    extend: {
      animation:['hover'],
      backgroundColor:['active','disabled'],
      transform:['active'],
      textColor:['disabled'],
      borderColor:['disabled'],
      backgroundColor:['disabled'],
      pointerEvents:['disabled'],
    }
  },
  plugins: [
  ],
  }
}

