import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui"), require('@tailwindcss/forms'),],

  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#34d399",

          "secondary": "#fbbf24",

          "accent": "#d6d3d1",

          "neutral": "#292924",

          "base-100": "#fffdff",

          "info": "#00e4ff",

          "success": "#008100",

          "warning": "#ffc500",

          "error": "#c71e4e",
        },
      },
    ],
  },
};
export default config;
