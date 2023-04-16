/** @type {import('tailwindcss').Config} */
export default {
      content: [
            "./index.html",
            "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
            screens: {
                  '2xl': {'max': '1535px'},
                  'xl': {'max': '1279px'},
                  'lg': {'max': '1023px'},
                  'md': {'max': '767px'},
                  'sm': {'max': '639px'},
            },
            fontFamily: {
                  'primary' : ['Rubik', 'sans-serif'],
                  'secondary' : ['Montserrat', "sans-serif"],
                  'normal' : ['Open Sans', 'sans-serif'],
            },
            extend: {
                  colors : {
                        main : {
                              primary : "#110E36",
                              secondary : "#1B273C",
                              accent : "#0EA6E6"
                        }
                  }
            },
      },
      plugins: [],
}