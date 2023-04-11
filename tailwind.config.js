/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0px 0px 11px 9px rgba(0,0,0,0.09)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
