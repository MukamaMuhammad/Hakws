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
        primary: "#87c657",
        primary2: "#9ad071",
        secondary: "#8A66B4",
        secondary2: "#A488C5",
      },
    },
  },
  plugins: [],
};
