module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  media: false,
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'developers': "linear-gradient(to bottom, rgba(243,244,246,0), rgba(0,0,0,1)), url('/public/img/image-2.jpg')",
      })
    },
  },
  variants: {
    extend: {
      scale: ["active"],
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
