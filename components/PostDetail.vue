<template>
    <div class="post-detail">
        <v-flex py-3>
                <div class="post-detail__meta">
                    <span class="post-detail__category">{{post.meta.category}}</span> - <span
                        class="post-detail__date">{{post.meta.publishDate}}</span>
                </div>
                <h2 class="post-detail__title headline">{{post.title}}</h2>
                <div class="post-detail__content" v-html="post.content"></div>
                <div class="post-detail__actions">
                    <div class="post-detail__action">
                        <v-btn flat outline color="primary" @click="$router.go(-1)">
                            <v-icon left>keyboard_arrow_left</v-icon>
                            Go back
                        </v-btn>
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

