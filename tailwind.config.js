/**  @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'yt-black': '#0f0f0f',
        'yt-light-black': '#272727',
        'yt-red': '#ff0000',
        'yt-gray': '#aaaaaa'
      }
    },
  },
  plugins: [],
};
 