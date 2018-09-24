<template>
    <div class="portfolio-page">
        <v-container fluid fill-height>
            <v-layout row wrap>
                <v-flex>
                    <h1>Portfolio</h1>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script lang="ts">
    import {
        Component,
        Vue
    } from "nuxt-property-decorator"
    import { State } from "vuex-class"
    import Card from "~/components/Card.vue"

    @Component({})
    export default class extends Vue {

    }
</script>