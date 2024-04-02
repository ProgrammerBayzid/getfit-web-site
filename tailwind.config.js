/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "375px",
        md: "400px",
        custom: "430px",
        lg: "1280px",
        xl: "1366px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        noto: ["Noto Sans Bengali", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
