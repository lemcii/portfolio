const color = require("color");
const defaultTheme = require("tailwindcss/defaultTheme");

const grays = defaultTheme.colors.gray;

for (const [key, value] of Object.entries(grays)) {
    grays[key] = color(value)
        .desaturate(1)
        .hsl()
        .string();
}

module.exports = {
    theme: {
        extend: {
            fontFamily: {
                mono: ["Victor Mono", ...defaultTheme.fontFamily.mono],
            },
            minWidth: (theme) => ({
                ...theme("width"),
            }),
            minHeight: (theme) => ({
                ...theme("height"),
            }),
            colors: {
                gray: grays,
            },
            inset: (theme) => ({
                ...theme("width"), // minus screen? lol
            }),
        },
    },
    variants: {},
    plugins: [],
};
