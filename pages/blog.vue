<template>
    <div class="blog-page">
        <v-container fluid fill-height>
            <v-layout row wrap>
                <v-flex>
                    <transition name="fade" mode="out-in">
                        <div class="blog-header" v-if="!$route.params.post">
                        <h1>Blog Feed {{$route.params.id}}</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mauris urna, laoreet id vestibulum pharetra, aliquet vel diam. Vestibulum ante ipsum primis in faucibus</p>
                        <v-tabs grow slider-color="primary" height="55">
                            <v-tab to="/blog/ui-ux"> UI/UX </v-tab>
                            <v-tab to="/blog/design"> Design </v-tab>
                            <v-tab to="/blog/development"> Development </v-tab>
                        </v-tabs>
                    </div>
                    </transition>
                    <transition name="fade" mode="out-in">
                        <nuxt-child />
                    </transition>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Watch } from "nuxt-property-decorator";

    @Component({})
    export default class extends Vue {
        // @Watch('$route', { immediate: true, deep: true })
        // onUrlChange(newVal: any) {
        //     // Some action
        // }
    }
</script>

<style scoped lang="styl">
    .blog-page {
        position: relative;
    }
    .fade-enter-active,
    .fade-leave-active {
        transition-duration: 0.3s;
        transition-property: opacity;
        transition-timing-function: ease-in-out;
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0
    }
</style>