<template>
    <div class="post-list">
        <PostListItem v-for="post in posts" :key="post.id" :post="post" />
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from "nuxt-property-decorator";
    import PostListItem from '~/components/PostListItem.vue';

    @Component({
        components: { PostListItem }
    })
    export default class PostList extends Vue {
        @Prop({ required: true }) filter;

        public items = [
            {
                id: 0,
                title: 'My first design post! More design related content to come.',
                summary: 'Unfortunately, this is a work in progress and there is no real content for you to read here. I apologize for the inconvenience. Feel free to shoot me an email in the mean time if you have any questions!',
                meta: { category: 'design', publishDate: 'September 28th, 2018' }
            },
            {
                id: 1,
                title: 'My first development post! More development related content to come.',
                summary: 'Unfortunately, this is a work in progress and there is no real content for you to read here. I apologize for the inconvenience. Feel free to shoot me an email in the mean time if you have any questions!',
                meta: { category: 'development', publishDate: 'September 28th, 2018' }
            },
            // {
            //     id: 2,
            //     title: '4 Web Design Principles Hollywood Reboots Can Teach Us',
            //     summary: 'Every week users submit a lot of interesting stuff on our sister site Webdesigner News, highlighting great content from around the web that can be of interest to web designers. The best way to keep track of all the great stories',
            //     meta: { category: 'design', publishDate: 'January 5th, 2018' }
            // },
            // {
            //     id: 3,
            //     title: '20 Freshest Web Designs, September 2018',
            //     summary: 'Every week users submit a lot of interesting stuff on our sister site Webdesigner News, highlighting great content from around the web that can be of interest to web designers. The best way to keep track of all the great stories',
            //     meta: { category: 'design', publishDate: 'January 5th, 2018' }
            // }
        ];

        get posts() {
            return this.filter === 'ui-ux' ? this.items : this.items.filter(post => post.meta.category === this.filter);
        }
    }
</script>