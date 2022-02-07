module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  media: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      scale: ["active"],
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}
