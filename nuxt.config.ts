export default {
    mode: "spa",
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
    loading: { color: "#f1f3f3" },
    buildModules: [
        "@nuxt/typescript-build",
        "@nuxtjs/eslint-module",
        "@nuxtjs/tailwindcss",
    ],
    modules: ["@nuxtjs/svg"],
};
