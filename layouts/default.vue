<template>
    <v-app id="inspire">
        <v-toolbar fixed flat app>
            <v-toolbar-title>
                <img class="logo" src="https://raw.githubusercontent.com/visualbam/portfolio-net/master/assets/logo.png" alt="">
            </v-toolbar-title>
            <!--<v-spacer></v-spacer>-->
            <v-toolbar-items :style="{ margin: '0 auto' }">
                <v-btn flat :to="route.route" v-for="route in routes" :key="route.title">{{route.title}}</v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <v-content>
            <v-container fluid fill-height>
                <v-layout justify-center>
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
