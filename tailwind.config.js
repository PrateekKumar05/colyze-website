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
        background: "#fff",
        primary: "#000",
        secondary: "#2DCA72",
      },

      fontFamily: {
        title: "Playfair Display",
        heading: "Poppins",
        para: "Work Sans",
      },
    },
  },
  plugins: [],
};
