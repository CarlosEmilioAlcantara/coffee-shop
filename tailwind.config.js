/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      textColor: {
        white: "#F5F2DE",
        whiteHover: "#D0C892",
        green: "#42816C",
        brightGreen: "#5EBB9C",
        blue: "#3E5E8B"
      },
      backgroundColor: {
        green: "#42816C",
        white: "#F5F2DE",
        whiteHover: "#D0C892"
      },
      borderColor: {
        white: "#F5F2DE"
      }
    },
  },
  plugins: [],
};
