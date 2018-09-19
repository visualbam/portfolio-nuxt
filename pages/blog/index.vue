<template>
    <section>
        <v-tabs fixed-tabs slider-color="primary">
            <v-tab> UI/UX </v-tab>
            <v-tab> Design </v-tab>
            <v-tab> Development </v-tab>
        </v-tabs>
        <div class="post-list">
            <div class="post">
                <span class="post__category">Design</span> - <span class="post__date">January 5th, 2018</span>
                <h2 class="post__headline">5 Common Portfolio Mistakes and How to Fix Them</h2>
                <div class="post__content">Every week users submit a lot of interesting stuff on our sister site Webdesigner News, highlighting great content from around the web that can be of interest to web designers. The best way to keep track of all the great stories and news being posted is simply to check out the Webdesigner News site, however, in case you missed some here’s a quick and useful compilation of the most popular designer news that we curated from the past week..</div>
                <div class="post__actions">
                    <div class="post__action">
                        <v-btn flat>hello</v-btn>
                    </div>
                </div>
            </div>
        </div>
    </section>
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