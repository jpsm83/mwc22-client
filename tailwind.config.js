module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  media: false,
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'developers': "url('/public/img/image-2.jpg')",
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
