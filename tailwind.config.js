/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  // can add jit if you want customization
  // mode: 'jit',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#F8F5F0',
        white: '#F8F3F0',
        tertiary: '#3b442e',
      },
      textColor: {
        primary: '#F8F5F0',
        tertiary: '#3b442e',
      },
      backgroundImage: {
        secondary: 'linear-gradient(88deg, #FDDCDB 1.41%, #FFC7C7 98.7%)',
      },
    },
  },
  variants: {},
  plugins: [],
};