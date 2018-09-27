import Vue from 'vue'
import Vuetify from 'vuetify'

// @ts-ignore
const options = `<%= JSON.stringify(options.vuetifyOptions, null, 2) %>`;
Vue.use(Vuetify, <%= JSON.stringify(options.vuetifyOptions, null, 2) %>);