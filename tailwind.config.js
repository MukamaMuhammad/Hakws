/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#90B466",
        primary2: "#a9c588",
        secondary: "#8A66B4",
        secondary2: "#A488C5",
      },
    },
  },
  plugins: [],
};
