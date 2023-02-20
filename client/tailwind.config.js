/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : "var(--primary)",
        lightSlate : "var(--lightSlate)",
        grayText : "var(--grayText)",
        dark : "var(--dark)",
        darkSlate : "var(--darkSlate)",
        pure : "var(--pure)" ,
        primaryHover : "var(--primaryHover)"
      }
    },
  },
  plugins: [],
}
