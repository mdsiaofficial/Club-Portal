/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "*",],
  theme: {
    screens: {
      sm: '480px',
      md: "768px",
      mdd:"905px",
      lg: "976px",
      xl: "1440px",
      xxl: "1920px",
    },
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'lexend': ['Lexend', 'sans-serif'],
        'nunito': ['Nunito', 'sans-serif'],
        'dancing': ['Dancing Script', 'cursive'],
      },
    },
  },
  plugins: [],
}

