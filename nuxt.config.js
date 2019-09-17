export default {
    modern: "client",
    htmlAttrs: {
        lang: "en",
    },
    html: {
        minify: {
            collapseBooleanAttributes: true,
            decodeEntities: true,
            minifyCSS: true,
            minifyJS: true,
            processConditionalComments: true,
            removeEmptyAttributes: true,
            removeRedundantAttributes: true,
            trimCustomFragments: true,
            useShortDoctype: true,
            collapseWhitespace: true,
            conservativeCollapse: true,
            removeOptionalTags: true,
            removeComments: true,
        },
    },
    head: {
        title: "Elliot McIntyre",
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
            {
                hid: "description",
                name: "description",
                content:
                    "Elliot is fully utilizing his experiences with; React and UX/UI Design to build a demonstrated history of software, which has helped forge cashflow, crime, trade, and property tracking services such as i4C Cashflow, NMPR, CheckMEND, Immobilise and ReportMyLoss",
            },
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
            {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: "/favicon-32x32.png",
            },
            {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: "/favicon-16x16.png",
            },
            {
                rel: "mask-icon",
                href: "/safari-pinned-tab.svg",
                color: "#5bbad5",
            },
        ],
    },
    css: ["@/assets/css/base.css"],
    buildModules: ["@nuxtjs/eslint-module", "@nuxtjs/tailwindcss"],
    generate: {
        dir: "public",
    },
};
