import Vue from 'vue'

Vue.prototype.$breakpoint = new Vue({
    data () {
        return {
            isMounted: false,
            default: {
                xs: true,
                xsOnly: true,
                xsAndUp: false,
                sm: true,
                smOnly: true,
                smAndDown: true,
                smAndUp: false,
                md: false,
                mdOnly: false,
                mdAndDown: false,
                mdAndUp: false,
                lg: false,
                lgOnly: false,
                lgAndDown: false,
                lgAndUp: false,
                xl: false,
                xlOnly: false,
                xlAndDown: false
            }
        }
    },
    methods: {
        is (breakpoint) {
            return this.isMounted ? this.$vuetify.breakpoint[breakpoint] : this.$data.default[breakpoint]
        }
    }
})

export default async function ({ app }) {
    if (!app.mixins) {
        app.mixins = []
    }
    app.mixins.push({
        mounted () {
            this.$breakpoint.$data.isMounted = true
        }
    })
}