<template>
    <div class="home-page">
        <v-container fluid fill-height>
            <v-layout row wrap>
                <v-flex>
                    <h1 class="headline">Bruce Aaron McElroy</h1>
                    <h2 class="title">Designer, Full Stack Developer & Mentor</h2>
                    <br>
                    <p class="subheading">I design, prototype  nd iterate to create applications that are beautiful and solve problems.</p>
                    <p class="body-1">As a software engineer, I enjoy bridging the gap between engineering and design — combining my technical knowledge with my keen eye for design to create a beautiful product. My goal is to always build applications that are scalable and efficient under the hood while providing engaging, pixel-perfect user experiences.</p>
                    <div class="social-icons">
                        <v-icon>fas fa-lock</v-icon>

                        <v-icon>fas fa-search</v-icon>

                        <v-icon>fas fa-list</v-icon>

                        <v-icon>fas fa-edit</v-icon>

                        <v-icon>fas fa-tachometer-alt</v-icon>

                        <v-icon>fas fa-circle-notch fa-spin</v-icon>
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "nuxt-property-decorator";

    @Component({})
    export default class extends Vue {
        created() {

        }
    }
</script>