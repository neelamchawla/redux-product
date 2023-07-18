/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,css,jsx,tsx,mdx}",
    "./index.html",
"./src/**/*.{js,ts,css,jsx,tsx}",
"./node_modules/tw-elements/dist/js/**/*.js"
  ],
  mode: "jit",
  theme: {
    extend: {},
    },
    darkMode: "class",
    plugins: [require("tw-elements/dist/plugin.cjs")]
};
