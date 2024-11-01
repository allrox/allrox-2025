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
        highlight: "#00d9ff",
        darkBackground: '#1a213f'
      },
      backgroundImage: {
        'hero-background': "url('/img/bg-slider.webp')",
      },
    },
  },
  plugins: [],
};
