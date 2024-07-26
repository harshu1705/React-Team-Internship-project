/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.clip-triangle': {
          'clip-path': 'polygon(100% 0, 0 100%, 100% 100%)',
        },
        '.clip-polygon': {
          'clip-path': 'polygon(50% 0%, 0% 100%, 100% 100%)',
        },
        '.clip-circle': {
          'clip-path': 'circle(50% at 50% 50%)',
        },
        // Add more clip-path utilities if needed
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
