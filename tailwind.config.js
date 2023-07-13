/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      black: "#121214",
      yellow: "#eba417",
      red: "#e52e4d",
      green: "#11825C",
      cyan: "#61dafa",
      "gray-50": "#f4f4f4",
      "gray-100": "#e1e1e6",
      "gray-300": "#a8a8b3",
      "gray-400": "#525254",
      "gray-500": "#454547",
      "gray-700": "#2c2c2e",
      "gray-800": "#292929",
      "gray-850": "#1f2729",
      "gray-900": "#121214",
      "green-dark": "#044941",
      white: "#FFFFFF",
    },
    screens: {
      xs: "360px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
      "3xl": "1600px",
    },
    extend: {
      boxShadow: {
        "3xl": "0px 0px 11px 9px rgba(0,0,0,0.09)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
