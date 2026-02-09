// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#064e3b",
          50: "#f0fdf4",
          100: "#d1fae5",
          600: "#059669",
          900: "#064e3b",
        },
        secondary: "#059669",
        accent: "#10b981",
        surface: "#f0fdf4",
        light: "#d1fae5",
      },
    },
  },
  plugins: [],
};
