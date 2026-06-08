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
    colors: {
      dark: "#0f172a",
      lighttext: "#CBD5E1",
      light: "#F8FAFC",
      cyan: "#38BDF8",
      darkcyan: "#0F7490",
      darksecondary: "#111827",
      darkbox: "#334155",
      lightbox: "#E2E8F0",
    },
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
