const variants = ["responsive", "hover", "focus", "group-hover", "group-focus"];

module.exports = {
  theme: {
    extend: {
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },
      height: () => ({
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      }),
      transitionDuration: {
        2000: "2000ms",
      },
    },
  },
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: [
      "./pages/.vitepress/**/*.js",
      "./pages/.vitepress/**/*.vue",
      "./pages/.vitepress/**/*.ts",
      "./pages/**/*.md",
      "./pages/**/*.vue",
      "./pages/**/*.js",
    ],
    options: {
      safelist: ["html", "body"],
    },
  },
  variants: {
    backgroundColor: variants,
    borderColor: variants,
    borderWidth: variants,
    boxShadow: variants,
    divideColor: variants,
    opacity: variants,
    scale: variants,
    textColor: variants,
    textDecoration: variants,
    translate: variants,
  },
};
