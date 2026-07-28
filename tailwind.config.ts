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
        primary: "#1B6B2A",
        "primary-dark": "#145520",
        "primary-light": "#238636",
        accent: "#E8960C",
        // On-light and on-dark variants of the marigold accent. #E8960C itself
        // only clears AA against a dark scrim (hero), not against white or the
        // forest-green section backgrounds.
        "accent-dark": "#A56804",
        "accent-light": "#FCD34D",
        surface: "#FAFAF8",
        "surface-alt": "#F5F5F2",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
