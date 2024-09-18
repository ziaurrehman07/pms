/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-gray": "#f5f5f5",
      },
      height: {
        "screen-dynamic": "calc(var(--vh, 1vh) * 100)",
      },
    },
  },
  plugins: [],
};
