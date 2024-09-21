/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "custom-dark-blue": "rgb(15,23,42)",
        "custom-light-blue": "#06bee1",
      },
    },
  },
  plugins: [],
};
