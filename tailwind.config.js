const color = require("color");
const defaultTheme = require("tailwindcss/defaultTheme");

const grays = defaultTheme.colors.gray;

for (const [key, value] of Object.entries(grays)) {
    grays[key] = color(value)
        .desaturate(1)
        .hsl()
        .string();
}

const sizing = {
    px: "1px",
    "0": "0",
    "1": "0.25rem",
    "2": "0.5rem",
    "3": "0.75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "8": "2rem",
    "10": "2.5rem",
    "12": "3rem",
    "16": "4rem",
    "20": "5rem",
    "24": "6rem",
    "32": "8rem",
    "40": "10rem",
    "48": "12rem",
    "56": "14rem",
    "64": "16rem",
    "72": "18rem",
    "80": "20rem",
    "1/2": "50%",
    "1/3": "33.333333%",
    "2/3": "66.666667%",
    "1/4": "25%",
    "2/4": "50%",
    "3/4": "75%",
    "1/5": "20%",
    "2/5": "40%",
    "3/5": "60%",
    "4/5": "80%",
    "1/6": "16.666667%",
    "2/6": "33.333333%",
    "3/6": "50%",
    "4/6": "66.666667%",
    "5/6": "83.333333%",
    "1/12": "8.333333%",
    "2/12": "16.666667%",
    "3/12": "25%",
    "4/12": "33.333333%",
    "5/12": "41.666667%",
    "6/12": "50%",
    "7/12": "58.333333%",
    "8/12": "66.666667%",
    "9/12": "75%",
    "10/12": "83.333333%",
    "11/12": "91.666667%",
    full: "100%",
    xs: "20rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem",
    "7xl": "96rem",
};

module.exports = {
    theme: {
        extend: {
            screens: {
                "2xl": "1440px",
            },
            fontFamily: {
                mono: ["Victor Mono", ...defaultTheme.fontFamily.mono],
            },
            minWidth: sizing,
            maxWidth: sizing,
            minHeight: sizing,
            maxHeight: sizing,
            colors: {
                background: "#f1f3f3",
                links: {
                    internal: {
                        default: "hsl(330, 100%, 87%)",
                        hover: "hsl(330, 100%, 82%)",
                        focus: "hsl(330, 100%, 72%)",
                    },
                    active: {
                        default: "hsl(50, 100%, 87%)",
                        hover: "hsl(50, 100%, 78%)",
                        focus: "hsl(50, 100%, 70%)",
                    },
                    external: {
                        default: "hsl(200, 100%, 87%)",
                        hover: "hsl(200, 100%, 82%)",
                        focus: "hsl(200, 100%, 72%)",
                    },
                },
                gray: grays,
            },
            inset: (theme) => ({
                ...theme("width"), // minus screen? lol
            }),
            spacing: sizing,
        },
        rotate: {
            "-90": "-90deg",
            "-45": "-45deg",
            "-4": "-4deg",
            "-3": "-3deg",
            "-2": "-2deg",
            "-1": "-1deg",
            "-p8": "-0.8deg",
            "-p4": "-0.4deg",
            "-p3": "-0.3deg",
            "-p2": "-0.2deg",
            "-p1": "-0.1deg",
            "0": "0deg",
            p1: "0.1deg",
            p2: "0.2deg",
            p3: "0.3deg",
            p4: "0.4deg",
            p8: "0.8deg",
            "1": "1deg",
            "2": "1deg",
            "3": "1deg",
            "4": "4deg",
            "45": "45deg",
            "90": "90deg",
        },
        translate: {
            bottom: "0%",
            top: "100%",
        },
    },
    variants: {},
    plugins: [require("tailwindcss-transforms")],
};
