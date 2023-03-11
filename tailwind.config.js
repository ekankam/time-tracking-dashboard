/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'c-dark-blue-900': 'hsla(226, 45%, 10%, 1)',
        'c-dark-blue-500': 'hsla(236, 45%, 20%, 1)',
        'c-dark-blue-400': 'hsla(236, 41%, 34%, 1)',
        'c-dark-blue-300': 'hsla(235, 45%, 61%, 1)',
        'c-pale-blue': 'hsl(236, 100%, 87%)',
        'c-work': 'hsl(15, 100%, 70%)',
        'c-play': 'hsl(195, 74%, 62%)',
        'c-study': 'hsl(348, 100%, 68%)',
        'c-exercise': 'hsl(145, 58%, 55%)',
        'c-social': 'hsl(264, 64%, 52%)',
        'c-self-care': 'hsl(43, 84%, 65%)',
        'c-blue': 'hsla(246, 80%, 60%, 1)'
      },
      fontSize: {
        56: ['56px', '66px'],
        40: ['40px', '47px'],
        32: ['32px', '38px'],
        24: ['24px', '28px'],
        18: ['18px', '21px'],
        15: ['15px', '18px'],
      },
      borderRadius: {
        'c-radius': '15px'
      },
      boxShadow: {
        'c-shadow': '0px 4px 4px 0px hsla(0, 0%, 0%, 0.25)',
      }
    },
  },
  plugins: [],
};