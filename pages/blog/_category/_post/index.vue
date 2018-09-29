<template>
    <div class="post-detail">
        <PostDetail :post="posts[$route.params.post]"/>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "nuxt-property-decorator";
    import PostDetail from '~/components/PostDetail.vue';
    import _ from 'lodash';

    @Component({components: {PostDetail}})
    export default class extends Vue {
        public scrollToTop: true;
        public items = [
            {
                id: 0,
                title: 'My first design post! More design related content to come.',
                summary: 'Unfortunately, this is a work in progress and there is no real content for you to read here. I apologize for the inconvenience. Feel free to shoot me an email in the mean time if you have any questions!',
                content: `<p>Unfortunately, this is a work in progress and there is no real content for you to read here. I apologize for the inconvenience. I'm currently learning how to use <a href="">Vue</a> , <a href="https://vuetifyjs.com/en/">Vuetify</a> and <a href="https://nuxtjs.org/">Nuxt</a>. I still need to wire up <a href="https://vuex.vuejs.org/">Vuex</a> and implement server calls using <a href="https://github.com/axios">Axios</a>. Feel free to shoot me an email in the mean time if you have any questions! I am more than happy to respond.</p><p><a href="mailto:bruce.mcelroy@gmail.com">bruce.mcelroy@gmail.com</a></a></p>`,
                meta: { category: 'design', publishDate: 'September 28th, 2018' }
            },
            {
                id: 1,
                title: 'My first development post! More development related content to come.',
                summary: 'Unfortunately, this is a work in progress and there is no real content for you to read here. I apologize for the inconvenience. Feel free to shoot me an email in the mean time if you have any questions!',
                content: `<p>Unfortunately, this is a work in progress and there is no real content for you to read here. I apologize for the inconvenience. I'm currently learning how to use <a href="">Vue</a> , <a href="https://vuetifyjs.com/en/">Vuetify</a> and <a href="https://nuxtjs.org/">Nuxt</a>. I still need to wire up <a href="https://vuex.vuejs.org/">Vuex</a> and implement server calls using <a href="https://github.com/axios">Axios</a>. Feel free to shoot me an email in the mean time if you have any questions! I am more than happy to respond.</p><p><a href="mailto:bruce.mcelroy@gmail.com">bruce.mcelroy@gmail.com</a></a></p>`,
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
            return _.keyBy(this.items, 'id');
        }
    }
</script>
