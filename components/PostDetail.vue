<template>
    <div class="post-detail">
        <v-flex>
            <v-container px-0>
                <v-layout>
                    <v-flex>
                        <div class="post-detail__meta">
                            <span class="post-detail__category">{{post.meta.category}}</span> - <span
                                class="post-detail__date">{{post.meta.publishDate}}</span>
                        </div>
                        <h2 class="post-detail__title headline">{{post.title}}</h2>
                        <div class="post-detail__content" v-html="post.content"></div>
                    </v-flex>
                </v-layout>
            </v-container>
            <v-flex mt-3 mb-3>
                <v-divider></v-divider>
            </v-flex>
            <v-container px-0>
                <v-layout class="post-detail__actions">
                    <div class="post-detail__action" @click="$router.back()">
                        <v-btn flat icon outline color="primary" ma-0>
                            <v-icon>keyboard_arrow_left</v-icon>
                        </v-btn>
                        <span class="primary--text"> Go Back </span>
                    </div>
                    <v-spacer></v-spacer>
                    <div class="post-detail__action">
                        <v-btn outline color="primary" @click="goToTop">
                            Scroll To Top
                            <v-icon>keyboard_arrow_up</v-icon>
                        </v-btn>
                    </div>
                </v-layout>
            </v-container>
        </v-flex>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue, Watch } from "nuxt-property-decorator";

    @Component({ })
    export default class PostDetail extends Vue {
        @Prop({required: true}) post;
        public goToTop() {
            window.scrollTo(0, 0)
        }
    }
</script>

