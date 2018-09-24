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
                    <div class="post-list">
                        <div class="post">
                            <div class="post__meta">
                                <span class="post__category">Design</span> - <span class="post__date">January 5th, 2018</span>
                            </div>
                            <h2 class="post__headline">5 Common Portfolio Mistakes and How to Fix Them</h2>
                            <div class="post__content">Every week users submit a lot of interesting stuff on our sister site Webdesigner News, highlighting great content from around the web that can be of interest to web designers. The best way to keep track of all the great stories..</div>
                            <div class="post__actions">
                                <div class="post__action">
                                    <v-btn flat outline>view post</v-btn>
                                </div>
                            </div>
                        </div>
                        <div class="post">
                            <div class="post__meta">
                                <span class="post__category">Design</span> - <span class="post__date">January 5th, 2018</span>
                            </div>
                            <h2 class="post__headline">5 Common Portfolio Mistakes and How to Fix Them</h2>
                            <div class="post__content">Every week users submit a lot of interesting stuff on our sister site Webdesigner News, highlighting great content from around the web that can be of interest to web designers. The best way to keep track of all the great stories..</div>
                            <div class="post__actions">
                                <div class="post__action">
                                    <v-btn flat outline>view post</v-btn>
                                </div>
                            </div>
                        </div>
                        <div class="post">
                            <div class="post__meta">
                                <span class="post__category">Design</span> - <span class="post__date">January 5th, 2018</span>
                            </div>
                            <h2 class="post__headline">5 Common Portfolio Mistakes and How to Fix Them</h2>
                            <div class="post__content">Every week users submit a lot of interesting stuff on our sister site Webdesigner News, highlighting great content from around the web that can be of interest to web designers. The best way to keep track of all the great stories..</div>
                            <div class="post__actions">
                                <div class="post__action">
                                    <v-btn flat outline>view post</v-btn>
                                </div>
                            </div>
                        </div>
                        <div class="post">
                            <div class="post__meta">
                                <span class="post__category">Design</span> - <span class="post__date">January 5th, 2018</span>
                            </div>
                            <h2 class="post__headline">5 Common Portfolio Mistakes and How to Fix Them</h2>
                            <div class="post__content">Every week users submit a lot of interesting stuff on our sister site Webdesigner News, highlighting great content from around the web that can be of interest to web designers. The best way to keep track of all the great stories..</div>
                            <div class="post__actions">
                                <div class="post__action">
                                    <v-btn flat outline>view post</v-btn>
                                </div>
                            </div>
                        </div>
                        <div class="post">
                            <div class="post__meta">
                                <span class="post__category">Design</span> - <span class="post__date">January 5th, 2018</span>
                            </div>
                            <h2 class="post__headline">5 Common Portfolio Mistakes and How to Fix Them</h2>
                            <div class="post__content">Every week users submit a lot of interesting stuff on our sister site Webdesigner News, highlighting great content from around the web that can be of interest to web designers. The best way to keep track of all the great stories..</div>
                            <div class="post__actions">
                                <div class="post__action">
                                    <v-btn flat outline>view post</v-btn>
                                </div>
                            </div>
                        </div>
                    </div>
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

<style scoped lang="styl">
    .blog-page {
        position: relative;
    }
</style>