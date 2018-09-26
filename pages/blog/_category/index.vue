<template>
    <PostList :filter="$route.params.category" />
</template>

<script lang="ts">
    import { Component, Vue } from "nuxt-property-decorator";
    import PostList from '~/components/PostList.vue';

    @Component({ components: { PostList } })
    export default class extends Vue {

    }
</script>

<style scoped lang="styl">

</style>