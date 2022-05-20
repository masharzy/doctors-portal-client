module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('/assets/images/hero-bg.jpg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  daisyui: {
    themes: [
      {
        doctorsPortal: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#191D24",
          "base-100": "#fff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
