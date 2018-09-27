<template>
    <div class="portfolio-page">
        <v-container grid-list-md pa-0>
            <v-layout row wrap justify-center>
                <v-flex xl6 lg9 md11 sm10 xs10>
                    <v-layout row wrap py-5 >
                        <v-flex>
                            <h2 class="title">Portfolio</h2>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "nuxt-property-decorator";

    @Component({})
    export default class extends Vue {

    }
</script>