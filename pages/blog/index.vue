<template>
    <div class="blog-page">
        <v-container fluid fill-height>
            <v-layout row wrap>
                <v-flex>
                    <div class="blog-header">
                        <h1>Blog Feed</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mauris urna, laoreet id vestibulum pharetra, aliquet vel diam. Vestibulum ante ipsum primis in faucibus</p>
                        <v-tabs grow slider-color="primary" height="55">
                            <v-tab> UI/UX </v-tab>
                            <v-tab> Design </v-tab>
                            <v-tab> Development </v-tab>
                        </v-tabs>
                    </div>
                    <PostList />
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "nuxt-property-decorator";
    import PostList from '~/components/PostList.vue';

    @Component({
        components: { PostList }
    })
    export default class extends Vue {

    }
</script>

<style scoped lang="styl">
    .blog-page {
        position: relative;
    }
</style>