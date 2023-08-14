/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // in the theme it override everything in tailwind
    fontFamily: {
      sans: "Roboto Mono, monospace",
    },
    extend: {
      // we extend a more things with this name
      // colors: {
      //   pizza: "#123456",
      // },
      height: {
        screen: "100dvh", // dvh - dynamic view height => it is a more modern way that don't leed to problems in mobile screens that it n't 100% height in mobile
      },
    },
  },
  plugins: [],
};
