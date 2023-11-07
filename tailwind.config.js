module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      primary: ["'Josefin Sans', sans-serif"],
      secondary: ["Just Another Hand"],
      sans: 'var(--font-inter), ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      applelove: "#ea4e47",
      atlantique: "#003d56",
      corail: "#f2998a",
      dulceleche: "#fcf6eb",
      gazon: "#75ba8b",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
