import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        krem: "#FDF6EC",
        kava: "#3B2314",
        zlata: "#D4A017",
        cihlova: "#C0522B",
      },
      fontFamily: {
        heading: ["var(--font-playfair)"],
        body: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};

export default config;
