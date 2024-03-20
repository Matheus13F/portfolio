/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xs: '360px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1400px',
      '3xl': '1600px',
    },
    extend: {
      boxShadow: {
        '3xl': '0px 0px 11px 9px rgba(0,0,0,0.09)',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
