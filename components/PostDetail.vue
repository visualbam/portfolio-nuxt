<template>
    <div class="post-detail">
        <v-flex py-4>
            <div class="post-detail__meta">
                <span class="post-detail__category">{{post.meta.category}}</span> - <span
                    class="post-detail__date">{{post.meta.publishDate}}</span>
            </div>
            <h2 class="post-detail__title headline">{{post.title}}</h2>
            <div class="post-detail__content" v-html="post.content"></div>
            <v-flex mt-5 mb-3>
                <v-divider></v-divider>
            </v-flex>
            <div class="post-detail__actions">
                <div class="post-detail__action" @click="$router.go(-1)">
                    <v-btn flat icon outline color="primary" ma-0>
                        <v-icon>keyboard_arrow_left</v-icon>
                    </v-btn>
                    <span class="primary--text"> Go Back </span>
                </div>
            </div>
        </v-flex>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from "nuxt-property-decorator";

    @Component({})
    export default class PostDetail extends Vue {
        @Prop({required: true}) post;
    }
</script>

