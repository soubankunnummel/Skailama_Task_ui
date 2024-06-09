/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        primery:"#7E22CE",
        secondery:"#999999",
        btn:"#211935"
      },
      transitionProperty: {
        'all': 'all',
      },
      transitionDuration: {
        'DEFAULT': '300ms',
      },
      transitionTimingFunction: {
        'DEFAULT': 'ease-in-out',
      },
      fontFamily:{
        'PlusJakartaSans': ['Plus Jakarta Sans', 'sans-serif'],
      },
      screens:{
        'sm': '576px',
        // => @media (min-width: 576px) { ... }
  
        'md': '960px',
        // => @media (min-width: 960px) { ... }
  
        'lg': '1440px',
        // => @media (min-width: 1440px) { ... }
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    
    themes: [],
  },
};
