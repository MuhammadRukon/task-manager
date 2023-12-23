/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#860A94",
    },
    fontFamily: {
      dmSans: "'DM Sans', sans-serif",
      integralCf: "'Integral CF Regular', sans-serif",
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
