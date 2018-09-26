<template>
    <div class="home-page">
        <v-layout row wrap justify-center pt-5 pb-5 pl-4 pr-4>
            <v-flex xs12 md8 lg6>
                <h1 class="headline">Bruce Aaron McElroy</h1>
                <h2 class="title">Designer, Full Stack Developer & Mentor</h2>
                <br>
                <p class="subheading">I design, prototype and iterate to create applications that are beautiful and
                    solve problems.</p>
                <p class="body-1">As a software engineer, I enjoy bridging the gap between engineering and design —
                    combining my technical knowledge with my keen eye for design to create a beautiful product. My
                    goal is to always build applications that are scalable and efficient under the hood while
                    providing engaging, pixel-perfect user experiences.</p>

                <div class="social-icons">
                    <v-btn flat icon color="primary">
                        <v-icon dark>fab fa-gitlab</v-icon>
                    </v-btn>
                    <v-btn flat icon color="primary">
                        <v-icon dark>fab fa-facebook-f</v-icon>
                    </v-btn>
                    <v-btn flat icon color="primary">
                        <v-icon dark>fab fa-codepen</v-icon>
                    </v-btn>
                    <v-btn flat icon color="primary">
                        <v-icon dark>fab fa-dribbble</v-icon>
                    </v-btn>
                    <v-btn flat icon color="primary">
                        <v-icon dark>fab fa-linkedin-in</v-icon>
                    </v-btn>
                </div>
            </v-flex>
        </v-layout>
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

<style lang="styl">
    .full-width {
        background: lightcoral;
    }
</style>