<template>
    <div class="home-page">
        <v-container fluid fill-height>
            <v-layout row wrap>
                <v-flex>
                    <h1>Welcome</h1>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "nuxt-property-decorator";

    @Component({})
    export default class extends Vue {
        created() {

        }
    }
</script>