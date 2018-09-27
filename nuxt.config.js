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
            }
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
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
        middleware: 'blogNavigation'
    },
    build: {
        vendor: ['gsap']
    },
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