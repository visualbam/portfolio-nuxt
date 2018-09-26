<template>
    <div class="post">
            <div class="post__meta">
                <span class="post__category">{{post.meta.category}}</span> - <span class="post__date">{{post.meta.publishDate}}</span>
            </div>
            <h2 class="post__title headline">{{post.title}}</h2>
            <div class="post__content">{{post.summary}}</div>
            <div class="post__actions">
                <div class="post__action">
                    <v-btn flat outline :to="`/blog/${$route.params.category}/${post.id}`">view post</v-btn>
                </div>
            </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from "nuxt-property-decorator";

    @Component({})
    export default class PostListItem extends Vue {
        @Prop({ required: true }) post;
    }
</script>