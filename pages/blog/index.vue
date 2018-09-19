<template>
    <div class="blog-page">
        <v-tabs grow slider-color="primary" height="55">
            <v-tab> UI/UX </v-tab>
            <v-tab> Design </v-tab>
            <v-tab> Development </v-tab>
        </v-tabs>
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
        </div>
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