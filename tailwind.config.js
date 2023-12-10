/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'white': '#ffffff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'darkbg': '#011223',
      'darkblue': '#144a76',
      'transparent': 'transparent',
      'darktrans': '#80808033',
    },
    fontFamily: {
      sans: ['Lexend', 'sans-serif'],
      serif: ['Lexend', 'sans-serif'],
    },
    extend: {
      width: {
        full: "100%",
        half: "50%",
        quart: "75%"
      },
      maxWidth: {
        cardWidth: '10rem',
        cardMin: '10rem'
      }, 
      fontSize: {
        medium: '1.5rem'
      },
      backgroundImage:{
        'adventure': "url('../assets/spiderman.jpg')"
      }
    },
  },
  plugins: [],
}

