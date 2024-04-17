/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/views/app.blade.php",
    "./resources/js/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        white : "#F0EFEF",
        grey : "#CDCDCD",
        lightgrey : "#EAEAEA",
        black : "#2C2C2C",
        primary : "#010038",
        secondary : "#293A80",
        tertiary : "#537EC5",
        lighttertiary : "#7E9FD4",
        red : "#C55353",
        lightred : "#E67C7C",
        green : "#71C553",
        lightgreen : "#99DC82",
      }
    },
  },
  plugins: [],
}

