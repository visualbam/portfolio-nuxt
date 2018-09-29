const parseArgs = require("minimist");
const argv = parseArgs(process.argv.slice(2), {
    alias: {
        H: "hostname",
        p: "port"
    },
    string: ["H"],
    unknown: parameter => false
});

const port =
    argv.port ||
    process.env.PORT ||
    process.env.npm_package_config_nuxt_port ||
    "3000";

const host =
    argv.hostname ||
    process.env.HOST ||
    process.env.npm_package_config_nuxt_host ||
    "localhost";

module.exports = {
    env: {
        baseUrl:
            process.env.BASE_URL ||
            `http://${host}:${port}`
    },
    head: {
        title: "Bruce Aaron McElroy | Software Engineer | Pittsburgh, PA",
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content:
                    "width=device-width, initial-scale=1"
            },
            {
                hid: "description",
                name: "description",
                content: "Nuxt.js project"
            },
            { name: "msapplication-TileColor", content: "#da532c" },
            { name: "theme-color", content: "#ffffff" }
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
            { rel: "apple-touch-icon", sizes: "180x180", type: "image/x-icon", href: "/apple-touch-icon.png" },
            { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
            { rel: "icon", type: "image/png", sizes: "16x16",  href: "/favicon-16x16.png" },
            { rel: "manifest", href: "/site.webmanifest" },
            { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" },
        ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading: { color: "#ed5a73" },
    // loading: { color: "#BA6DDB" },
    /*
    ** Build configuration
    */
    css: [
        "~/assets/css/main.css",
        "~/assets/css/main.styl",
    ],
    router: {
        middleware: 'blogNavigation',
        scrollBehavior: function (to, from, savedPosition) {
            return { x: 0, y: 0 }
        }
    },
    plugins: [
        "~/plugins/breakpoint.js"
    ],
    modules: [
        "@nuxtjs/axios",
        "~/modules/vuetify.js",
        "~/modules/typescript.js"
    ],
    axios: {},
    vuetify: {
       theme: {
           primary: '#ed5a73',
           secondary: '#151030',
           accent: '#F9B967'
       }
    },
};