<template>
    <v-app id="inspire">
        <!--<v-toolbar fixed app>-->
            <!--<v-toolbar-side-icon @click.stop="miniVariant = !miniVariant"></v-toolbar-side-icon>-->
            <!--<v-toolbar-title>Bruce Aaron McElroy</v-toolbar-title>-->
        <!--</v-toolbar>-->
        <v-navigation-drawer
                persistent
                :miniVariant="miniVariant"
                :clipped="false"
                v-model="drawer"
                fixed
                width="250"
                mobile-break-point="10"
                app>
            <v-list>
                <v-list-tile  class="vb-logo-container">
                    <v-list-tile-action @click.stop="miniVariant = !miniVariant">
                        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <div class="logo">
                            <img class="logo" src="https://raw.githubusercontent.com/visualbam/portfolio-net/master/assets/logo.png" alt="">
                        </div>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
            <v-list>
                <v-list-tile v-for="route in routes" :key="route.title" :to="route.route">
                    <v-list-tile-action>
                        <v-icon>{{route.icon}}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{route.title}}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-content>
            <v-container fluid fill-height>
                <v-layout justify-center align-center>
                    <v-flex shrink>
                        <v-btn color="success">Success</v-btn>
                        <v-btn color="primary">Primary</v-btn>
                        <nuxt />
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>

<script lang="ts">
    import { Component, Vue } from "nuxt-property-decorator";

    @Component({})
    export default class extends Vue {
        drawer = true;
        clipped = false;
        fixed = false;
        miniVariant = true;
        left = false;
        routes = [
            {
                icon: 'speaker_notes',
                route: 'blog',
                title: 'Blog'
            },
            {
                icon: 'favorite',
                route: 'portfolio',
                title: 'Portfolio'
            },
            {
                icon: 'work',
                route: 'resume',
                title: 'Resume'
            }
        ];
    }
</script>
