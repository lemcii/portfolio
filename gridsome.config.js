// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: "Elliot McIntyre",
    siteDescription:
        "Elliot is utilizing his experience to build a demonstrated history of software, which has helped forge cashflow, crime, trade, and property tracking services such as i4C Cashflow, NMPR, CheckMEND, Immobilise, and ReportMyLoss",
    titleTemplate: "%s – <siteName>",
    templates: {
        Post: "/journal/:slug",
        Tag: "/tag/:id",
    },
    siteUrl: "https://elliotmcintyre.com",
    plugins: [
        {
            use: "gridsome-plugin-tailwindcss",
        },
        {
            use: "@gridsome/source-filesystem",
            options: {
                typeName: "Post",
                path: "./content/journal/**/*.md",
                refs: {
                    tags: {
                        typeName: "Tag",
                        create: true,
                    },
                },
            },
        },
        {
            use: "@gridsome/plugin-sitemap",
        },
    ],
    transformers: {
        remark: {
            externalLinksTarget: "_blank",
            externalLinksRel: ["nofollow", "noopener", "noreferrer"],
            anchorClassName: "icon icon-link",
            plugins: ["@gridsome/remark-prismjs"],
        },
    },
};
