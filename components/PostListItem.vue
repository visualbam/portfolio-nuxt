<template>
    <div class="post-list-item">
        <v-flex py-4>
            <nuxt-link :to="`/blog/${$route.params.category}/${post.id}`">
                <div class="post-list-item__meta">
                    <span class="post-list-item__category">{{post.meta.category}}</span> - <span
                        class="post-list-item__date">{{post.meta.publishDate}}</span>
                </div>
                <h2 class="post-list-item__title headline">
                    {{post.title}}
                </h2>
                <div class="post-list-item__content">{{post.summary}}</div>
                <div class="post-list-item__actions">
                    <div class="post-list-item__action">
                        <v-btn flat outline color="primary">
                            view post
                        </v-btn>
                    </div>
                </div>
            </nuxt-link>
        </v-flex>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from "nuxt-property-decorator";

    @Component({})
    export default class PostListItem extends Vue {
        @Prop({required: true}) post;
    }
</script>

