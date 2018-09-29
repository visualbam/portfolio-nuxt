<template>
    <div class="blog-page">
        <v-container :fluid="breakpoint.xsOnly" pa-0>
            <v-layout row wrap justify-center pa-0 pb-3>
                <v-flex xl6 lg9 md11 sm10 xs12>
                    <v-tabs grow slider-color="primary" height="55">
                        <v-tab to="/blog/ui-ux"> UI/UX </v-tab>
                        <v-tab to="/blog/design"> Design</v-tab>
                        <v-tab to="/blog/development"> Development</v-tab>
                    </v-tabs>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container pa-0>
            <v-layout row wrap justify-center>
                <v-flex xl6 lg9 md11 sm10 xs10>
                    <v-layout row wrap pb-5>
                        <v-flex>
                            <div class="content" ref="content">
                                <nuxt-child />
                            </div>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Watch } from "nuxt-property-decorator";

    @Component({})
    export default class extends Vue {
        // @Watch('$route', { immediate: true, deep: true })
        // onUrlChange(newVal: any) {
        //     // Some action
        // }
        public isHydrated: boolean = false;

        get breakpoint() {
            return this.isHydrated
                ? this.$vuetify.breakpoint
                : {
                    xs: true,
                    xsOnly: true,
                    xsAndUp: false,
                    sm: true,
                    smOnly: true,
                    smAndDown: true,
                    smAndUp: false,
                    md: false,
                    mdOnly: false,
                    mdAndDown: false,
                    mdAndUp: false,
                    lg: false,
                    lgOnly: false,
                    lgAndDown: false,
                    lgAndUp: false,
                    xl: false,
                    xlOnly: false,
                    xlAndDown: false
                }// "empty" $breakpoint object with initial values
        }

        mounted() {
            this.isHydrated = true
        }

    }
</script>