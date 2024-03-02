/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    // colors: {
    //   darkprimary: "#000000",
    //   lightprimary: "#ffffff",
    //   purple: "#3f3cbb",
    //   midnight: "#121063",
    //   metal: "#565584",
    //   tahiti: "#3ab7bf",
    //   silver: "#ecebff",
    //   "bubble-gum": "#ff77e9",
    //   bermuda: "#78dcca",
    // },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
      anta: ["Anta", "sans-serif"],
    },
    screens: {
      xxs: "350px",
      xs: "450px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      xmd: "700px",
      md: "768px",
      // => @media (min-width: 768px) { ... }
      minilg: "836px",
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
