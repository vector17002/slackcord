/** @type {import('tailwindcss').Config} */
export default {
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
};
