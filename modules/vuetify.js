const path = require('path');

const defaults = {
    css: true,
    materialIcons: true,
    fontAwesomeIcons: true
};

module.exports = function (moduleOptions) {
    const options = Object.assign({}, defaults, this.options.vuetify, moduleOptions);

    // Add css
    if (options.css) {
        this.options.css.unshift('vuetify/dist/vuetify.css');
    }

    // Add Material Icons font
    if (options.materialIcons) {
        this.options.head.link.push({
            rel: 'stylesheet',
            type: 'text/css',
            href: '//fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
        })
    }

    // Add Font Awesome Icons font
    if (options.fontAwesomeIcons) {
        this.options.head.link.push({
            rel: 'stylesheet',
            type: 'text/css',
            href: '//use.fontawesome.com/releases/v5.3.1/css/all.css',
            integrity: 'sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU',
            crossorigin: 'anonymous'
        })
    }

    // Remove module options
    const vuetifyOptions = Object.assign({}, options);
    delete vuetifyOptions.css;
    delete vuetifyOptions.materialIcons;
    delete vuetifyOptions.fontAwesomeIcons;

    // Register plugin
    this.addPlugin({
        src: path.resolve(__dirname, 'plugin.js'),
        fileName: 'vuetify.js',
        options: {
            vuetifyOptions
        }
    })
};

module.exports.meta = require('../package.json');