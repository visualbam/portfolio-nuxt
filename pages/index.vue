<template>
    <section>
        <h1>Hello world</h1>
    </section>
</template>

<script lang="ts">
    import {
        Component,
        Vue
    } from "nuxt-property-decorator"
    import { State } from "vuex-class"
    import Card from "~/components/Card.vue"

    @Component({})
    export default class extends Vue {

    }
</script>