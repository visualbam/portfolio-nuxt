<template>
    <v-app id="inspire">
        <v-toolbar fixed flat app class="navigation" height="60">
            <v-container :fluid="breakpoint.xsOnly" pa-0>
                <v-layout row wrap justify-center pa-0>
                    <v-flex xl6 lg9 md11 sm10 xs12 :pl-4="breakpoint.xsOnly">
                        <v-toolbar card >
                            <v-toolbar-title>
                                <img class="logo" @click="goHome" src="~/assets/images/bam_logo.svg" alt="">
                            </v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-toolbar-items>
                                <v-btn flat :to="route.route" v-for="route in routes" :key="route.title">
                                    {{route.title}}
                                </v-btn>
                            </v-toolbar-items>
                        </v-toolbar>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-toolbar>
        <v-content>
            <nuxt/>
        </v-content>
    </v-app>
</template>

<script lang="ts">
    import { Component, Vue } from "nuxt-property-decorator";
    import { Route } from "vue-router";

    @Component({})
    export default class extends Vue {
        public isHydrated: boolean = false;
        public routes = [
            {
                icon: 'speaker_notes',
                route: '/',
                title: 'Resume'
            },
            // {
            //     icon: 'favorite',
            //     route: '/portfolio',
            //     title: 'Portfolio'
            // },
            {
                icon: 'speaker_notes',
                route: '/blog',
                title: 'Blog'
            }
        ];

        get breakpoint() {
            return this.isHydrated
                ? this.$vuetify.breakpoint
                : {
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
                }// "empty" $breakpoint object with initial values
        }

        public goHome() {
            this.$router.push('/');
        }

        mounted() {
            this.isHydrated = true
        }
    }
</script>
