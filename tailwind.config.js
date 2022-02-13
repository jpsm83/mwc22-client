module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  media: false,
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        developers: "url('/public/img/image-20.jpg')",
      }),
    },
  },
  variants: {
    extend: {
      scale: ["active"],
    },
  },
};
