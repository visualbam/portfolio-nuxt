<template>
    <v-app id="inspire">
        <v-toolbar dark fixed app>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>Bruce Aaron McElroy</v-toolbar-title>
        </v-toolbar>
        <v-navigation-drawer v-model="drawer" fixed app>
            <v-list dense>
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
        <v-navigation-drawer
                v-model="left"
                temporary
                fixed
        ></v-navigation-drawer>
        <v-content>
            <v-container fluid fill-height>
                <v-layout justify-center align-center>
                    <v-flex shrink>
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
