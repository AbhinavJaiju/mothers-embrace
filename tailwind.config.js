import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        'custom-pink': '#ff6f91',
      },
      height: {
        '90': '40.5rem',
        '120': '50rem',
        '150': '60.5rem',
      },
    },
  },
  plugins: [flowbite.plugin()],
};
