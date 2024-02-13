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

          "primary": "#22d3ee",

          "secondary": "#84cc16",

          "accent": "#991b1b",

          "neutral": "#991b1b",

          "base-100": "#fffff8",

          "info": "#fecaca",

          "success": "#00f2bf",

          "warning": "#ffb400",

          "error": "#fc0047",
        },
      },
    ],
  },
};
export default config;
