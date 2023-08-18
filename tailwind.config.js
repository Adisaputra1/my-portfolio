/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#F2F5F9',
        secondary: '#FF9C1A',
        warm: '#EC1B09',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        raleway: ['Ralweay', 'sans-serif'],
      },
      spacing: {
        852: '852px',
        700: '715px',
        730: '730',
        720: '727px',
        1060: '1260px',
        660: '680px',
        384: '452px',
        99: '400px',
        100: '550px',
        102: '460px',
      },
    },
  },
  plugins: [],
};
