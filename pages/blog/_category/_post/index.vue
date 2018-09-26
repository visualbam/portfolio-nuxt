<template>
    <div class="post">
        <h1 ref="post">Hello!!</h1>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "nuxt-property-decorator";
    import { TweenMax } from 'gsap/TweenMax';

    @Component({})
    export default class extends Vue {
        beforeDestroy() {
            // console.log(this.$refs);
            // console.log(this.$refs['post']);
            // TweenMax.to(this.$refs['post'], 0.25, {
            //     opacity: 0
            // });
        }
    }
</script>
