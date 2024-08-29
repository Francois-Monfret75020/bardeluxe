import { info } from "console";
import { Oswald } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        oswald: ["Oswald", "serif"],
      },
      colors: {
        creme: "#E9E3D1",
        greeno: "#A8BBA0",
        blacko: "#001D1B",
   
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        calendly: "1650px",
        footer: "652px",
        info: "900px",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};

export default config;
