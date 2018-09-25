<template>
    <div class="post-list">
        <PostListItem v-for="post in posts" :key="post.id" :post="post" />
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "nuxt-property-decorator";
    import PostListItem from '~/components/PostListItem.vue';

    @Component({
        components: { PostListItem }
    })
    export default class PostList extends Vue {
        public  posts = [
            {
                id: 0,
                title: '5 Common Portfolio Mistakes and How to Fix Them',
                summary: 'Every week users submit a lot of interesting stuff on our sister site Webdesigner News, highlighting great content from around the web that can be of interest to web designers. The best way to keep track of all the great stories',
                meta: { category: 'Design', publishDate: 'January 5th, 2018' }
            },
            {
                id: 1,
                title: '10 Free Font Alternatives to Gotham',
                summary: 'Every week users submit a lot of interesting stuff on our sister site Webdesigner News, highlighting great content from around the web that can be of interest to web designers. The best way to keep track of all the great stories',
                meta: { category: 'Design', publishDate: 'January 5th, 2018' }
            },
            {
                id: 2,
                title: '4 Web Design Principles Hollywood Reboots Can Teach Us',
                summary: 'Every week users submit a lot of interesting stuff on our sister site Webdesigner News, highlighting great content from around the web that can be of interest to web designers. The best way to keep track of all the great stories',
                meta: { category: 'Design', publishDate: 'January 5th, 2018' }
            },
            {
                id: 3,
                title: '20 Freshest Web Designs, September 2018',
                summary: 'Every week users submit a lot of interesting stuff on our sister site Webdesigner News, highlighting great content from around the web that can be of interest to web designers. The best way to keep track of all the great stories',
                meta: { category: 'Design', publishDate: 'January 5th, 2018' }
            }
        ];
    }
</script>