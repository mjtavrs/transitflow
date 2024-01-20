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
        "primary-blue": "#091242",
        "primary-yellow": "#FFBE34",
        "primary-white": "#F4F4F4",
        "secondary-blue": "#111C55",
        "secondary-yellow": "#F6B426",
        "tertiary-blue": "#273270",
        "font-primary-color": "#1C1F35",
        "font-secondary-color": "#666C89"
      }
    },
  },
  plugins: [],
};
export default config;
