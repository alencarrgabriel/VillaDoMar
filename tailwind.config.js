/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E85D04', // Laranja vibrante
          light: '#F48C06',  // Laranja mais claro
          dark: '#DC2F02',   // Laranja avermelhado (mais escuro)
        },
        secondary: {
          DEFAULT: '#2A9D8F', // Verde-água / turquesa
          light: '#4ECDC4',   // Verde-água claro
          dark: '#1A6B60',    // Verde-água escuro
        },
        tertiary: {
          DEFAULT: '#FFEDCB', // Areia claro
          light: '#FFF5E5',   // Marfim
          dark: '#FFE0B0',    // Areia mais escuro
        },
        accent: {
          DEFAULT: '#FF9E4F', // Coral / pêssego
          light: '#FFB980',   // Coral claro
          dark: '#FF7E21',    // Coral escuro
        },
        "gray-light": "#F7F9FB",
        "gray-dark": "#4B5563",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        serif: ["Roboto Slab", "serif"],
      },
    },
  },
  plugins: [],
};
