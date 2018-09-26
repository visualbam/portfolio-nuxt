<template>
    <div class="blog-page">
        <v-container fluid fill-height>
            <v-layout row wrap>
                <v-flex>
                        <div class="blog-header" v-if="!$route.params.post" ref="blog-header">
                            <h1>Blog Feed {{$route.params.id}}</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mauris urna, laoreet id vestibulum pharetra, aliquet vel diam. Vestibulum ante ipsum primis in faucibus</p>
                            <v-tabs grow slider-color="primary" height="55">
                                <v-tab to="/blog/ui-ux"> UI/UX </v-tab>
                                <v-tab to="/blog/design"> Design </v-tab>
                                <v-tab to="/blog/development"> Development </v-tab>
                            </v-tabs>
                        </div>
                        <div class="content" ref="content">
                            <nuxt-child />
                        </div>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Watch } from "nuxt-property-decorator";
    let TweenMax;
    if (process['browser']) {
        TweenMax = require("gsap/TweenMax");
    }

    @Component({})
    export default class extends Vue {
        // @Watch('$route', { immediate: true, deep: true })
        // onUrlChange(newVal: any) {
        //     // Some action
        // }

        mounted() {
            // TweenMax.to(this.$refs['blog-header'], 1, {
            //     opacity: 1
            // });
            // fade.add();
            // console.log();
            // fade.set(this.$refs['blog-header'], {
            //     opacity: 0
            // });
            // fade.to(this.$refs['blog-header'], 2, {
            //     opacity: 1
            // });
        }

    }
</script>

<style scoped lang="styl">
    .blog-page {
        position: relative;
    }

    .blog-header {
        /*opacity: 0;*/
    }
</style>