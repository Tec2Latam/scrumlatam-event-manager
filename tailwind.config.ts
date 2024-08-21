import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {},
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#FE2E00",
          "primary-content": "#ffffff",
          "secondary": "#082965",
          "secondary-content": "#ffffff",
          "accent": "#00ddff",
          "accent-content": "#001116",
          "neutral": "#121826",
          "neutral-content": "#c9cbcf",
          "base-100": "#ffffff",
          "base-200": "#d8dede",
          "base-300": "#b8bebe",
          "base-content": "#151616",
          "info": "#00c1ff",
          "info-content": "#000e16",
          "success": "#068500",
          "success-content": "#d3e7d1",
          "warning": "#a37c00",
          "warning-content": "#0a0500",
          "error": "#a80000",
          "error-content": "#160305",
        },
      },
    ],
  },
  plugins: [
    daisyui,
  ],
};
export default config;
