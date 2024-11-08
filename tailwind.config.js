/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
    screens: {
      'sm': '640px',    // Cambiamos el breakpoint sm a 480px
      'md': '768px',    // md sigue siendo 768px
      'lg': '1024px',   // lg sigue siendo 1024px
      'xl': '1280px',   // xl sigue siendo 1280px
      '2xl': '1536px',  // 2xl sigue siendo 1536px
    },
  },
  plugins: [],
}

