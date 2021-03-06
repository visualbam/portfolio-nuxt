<template>
    <div class="home-page">
        <section class="intro">
            <v-container pa-0>
                <v-layout row wrap justify-center>
                    <v-flex xl4 lg6 md8 sm9 xs11 py-5 my-5 text-xs-center>
                        <h1 class="display-1">Bruce McElroy</h1>
                        <span class="accent--text headline">Designer, Full Stack Developer  <br
                                v-if="breakpoint.xsOnly"> & Mentor </span>
                        <br>
                        <br>
                        <p class="subheading text--white">I enjoy bridging the gap between
                            engineering and design — combining my technical knowledge with my keen eye for design to
                            create a beautiful
                            product. </p>

                        <div class="social-icons">
                            <v-btn flat icon color="primary">
                                <a href="https://gitlab.com/visualbam" target="_blank">
                                    <v-icon dark>fab fa-gitlab</v-icon>
                                </a>
                            </v-btn>
                            <v-btn flat icon color="primary">
                                <a href="http://codepen.io/visualbam" target="_blank">
                                    <v-icon dark>fab fa-codepen</v-icon>
                                </a>
                            </v-btn>
                            <v-btn flat icon color="primary">
                                <a href="https://www.facebook.com/bruce.a.mcelroy" target="_blank">
                                    <v-icon dark>fab fa-facebook-f</v-icon>
                                </a>
                            </v-btn>
                            <v-btn flat icon color="primary">
                                <a href="https://dribbble.com/visualbam" target="_blank">
                                    <v-icon dark>fab fa-dribbble</v-icon>
                                </a>
                            </v-btn>
                            <v-btn flat icon color="primary">
                                <a href="https://www.linkedin.com/in/brucemcelroy/" target="_blank">
                                    <v-icon dark>fab fa-linkedin-in</v-icon>
                                </a>
                            </v-btn>
                        </div>
                    </v-flex>
                </v-layout>
            </v-container>
        </section>
        <section class="skills">
            <v-container pa-0>
                <v-layout row wrap justify-center>
                    <v-flex xl6 lg9 md11 sm10 xs10 my-5 class="inset-container">
                        <v-layout row wrap class="text-xs-center">
                            <v-flex xs12 sm6 md6 px-4 py-5 class="br-1" :class="{ 'ba-0': breakpoint.xsOnly }">
                                <v-icon x-large color="accent">wb_sunny</v-icon>
                                <br><br>
                                <h2 class="title">Designer</h2>
                                <br>
                                <p class="subheading">I value simple content structure, clean design patterns, and
                                    thoughtful
                                    interactions.</p>

                                <h4 :style="{ color: $vuetify.theme.primary}">Things I enjoy designing</h4>
                                <br>
                                <v-chip outline>Apps</v-chip>
                                <v-chip outline>Logos</v-chip>
                                <v-chip outline>UI/UX</v-chip>
                                <v-chip outline>Web</v-chip>
                                <br><br>

                                <v-list>
                                    <template>
                                        <h4 :style="{ color: $vuetify.theme.primary}">Design tools</h4>
                                        <br>
                                        <v-list-tile @click="">
                                            <v-list-tile-content>
                                                <v-list-tile-title class="text-xs-center">Adobe XD</v-list-tile-title>
                                            </v-list-tile-content>
                                        </v-list-tile>
                                        <v-list-tile @click="">
                                            <v-list-tile-content>
                                                <v-list-tile-title class="text-xs-center">Affinity Designer
                                                </v-list-tile-title>
                                            </v-list-tile-content>
                                        </v-list-tile>
                                        <v-list-tile @click="">
                                            <v-list-tile-content>
                                                <v-list-tile-title class="text-xs-center">Affinity Photo
                                                </v-list-tile-title>
                                            </v-list-tile-content>
                                        </v-list-tile>
                                        <v-list-tile @click="">
                                            <v-list-tile-content>
                                                <v-list-tile-title class="text-xs-center">Invision Studio
                                                </v-list-tile-title>
                                            </v-list-tile-content>
                                        </v-list-tile>
                                        <v-list-tile @click="">
                                            <v-list-tile-content>
                                                <v-list-tile-title class="text-xs-center">Sketch</v-list-tile-title>
                                            </v-list-tile-content>
                                        </v-list-tile>
                                    </template>
                                </v-list>
                            </v-flex>

                            <v-flex v-if="breakpoint.xsOnly">
                                <v-divider></v-divider>
                            </v-flex>

                            <v-flex xs12 sm6 md6 px-4 py-5>
                                <v-icon x-large color="accent">code</v-icon>
                                <br><br>
                                <h2 class="title">Developer</h2>
                                <br>
                                <p class="subheading">I tend to code things from scratch, and enjoy bringing ideas to
                                    life in the
                                    browser.</p>

                                <h4 :style="{ color: $vuetify.theme.primary}">Languages I speak</h4>
                                <br>
                                <v-chip outline>HTML</v-chip>
                                <v-chip outline>CSS</v-chip>
                                <v-chip outline>Javascript</v-chip>
                                <v-chip outline>c#</v-chip>
                                <br><br>

                                <v-list>
                                    <template>
                                        <h4 :style="{ color: $vuetify.theme.primary}">Development tools</h4>
                                        <br>
                                        <v-list-tile @click="">
                                            <v-list-tile-content>
                                                <v-list-tile-title class="text-xs-center">Webstorm</v-list-tile-title>
                                            </v-list-tile-content>
                                        </v-list-tile>

                                        <v-list-tile @click="">
                                            <v-list-tile-content>
                                                <v-list-tile-title class="text-xs-center">Rider</v-list-tile-title>
                                            </v-list-tile-content>
                                        </v-list-tile>

                                        <v-list-tile @click="">
                                            <v-list-tile-content>
                                                <v-list-tile-title class="text-xs-center">vscode</v-list-tile-title>
                                            </v-list-tile-content>
                                        </v-list-tile>

                                        <v-list-tile @click="">
                                            <v-list-tile-content>
                                                <v-list-tile-title class="text-xs-center">Gitlabs</v-list-tile-title>
                                            </v-list-tile-content>
                                        </v-list-tile>

                                        <v-list-tile @click="">
                                            <v-list-tile-content>
                                                <v-list-tile-title class="text-xs-center">Hyper.js</v-list-tile-title>
                                            </v-list-tile-content>
                                        </v-list-tile>
                                    </template>
                                </v-list>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                </v-layout>
            </v-container>
        </section>
        <section class="companies">
            <v-container pa-0>
                <v-layout row wrap justify-center>
                    <v-flex xl4 lg6 md8 sm8 xs10 py-5 my-5 text-xs-center>
                        <h1 class="display-1">I'm proud to have collaborated</h1>
                        <span class="accent--text headline">with some awesome companies</span><br>
                        <h1 class="display-1 accent--text"></h1>
                        <!--<span class="accent&#45;&#45;text"><strong>Designer, Full Stack Developer & Mentor</strong> - Greater Pittsburgh Area </span><br><br>-->
                    </v-flex>
                </v-layout>
            </v-container>
        </section>
        <section class="experience">
            <v-container pa-0>
                <v-layout row wrap justify-center class="text-xs-center">
                    <v-flex xl6 lg9 md11 sm10 xs12 px-4 py-5 my-5 class="inset-container">
                        <v-layout row wrap>
                            <v-flex xs12 md6 pa-2>
                                <h2 class="title">Work Experience</h2>
                                <br>
                                <v-list three-line>
                                    <template v-for="(company, index) in companies">
                                        <v-subheader>{{company.position}}</v-subheader>
                                        <v-divider></v-divider>
                                        <v-list-tile v-if="company.url" :href="company.url" target="_blank">
                                            <v-list-tile-avatar>
                                                <img :src="company.icon" alt="">
                                            </v-list-tile-avatar>
                                            <v-list-tile-content>
                                                <v-list-tile-title>{{company.name}}</v-list-tile-title>
                                                <v-list-tile-sub-title>{{company.startDate}} - {{company.endDate}}
                                                </v-list-tile-sub-title>
                                            </v-list-tile-content>
                                            <v-list-tile-action>
                                                    <v-btn flat icon color="primary">
                                                        <v-icon>link</v-icon>
                                                    </v-btn>
                                            </v-list-tile-action>
                                        </v-list-tile>
                                    </template>
                                </v-list>
                            </v-flex>
                            <v-flex xs12 md6 pa-2>
                                <h2 class="title">Education</h2>
                                <br>
                                <v-list three-line>
                                    <template v-for="(school, index) in schools">
                                        <v-subheader>{{school.degree}}</v-subheader>
                                        <v-divider></v-divider>
                                        <v-list-tile v-if="school.url" :href="school.url" target="_blank">
                                            <v-list-tile-avatar>
                                                <img :src="school.icon" alt="">
                                            </v-list-tile-avatar>
                                            <v-list-tile-content>
                                                <v-list-tile-title>{{school.name}}</v-list-tile-title>
                                                <v-list-tile-sub-title>{{school.startDate}} - {{school.endDate}}
                                                </v-list-tile-sub-title>
                                            </v-list-tile-content>
                                            <v-list-tile-action>
                                                    <v-btn flat icon color="primary">
                                                        <v-icon>link</v-icon>
                                                    </v-btn>
                                            </v-list-tile-action>
                                        </v-list-tile>
                                    </template>
                                </v-list>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                </v-layout>
            </v-container>
        </section>
    </div>
</template>

<script lang="ts">
    import { Component, Provide, Vue } from "vue-property-decorator";

    @Component({})
    export default class extends Vue {
        public schools = [
            {
                icon: require('~/assets/images/ptc-icon.svg'),
                name: 'Pittsburgh Technical College',
                degree: 'Graphic Design',
                url: 'https://www.ptcollege.edu/',
                startDate: '2009',
                endDate: '2011'
            },
            {
                icon: require('~/assets/images/mvtc-icon.svg'),
                name: 'Mon Valley Career & Technology Center',
                degree: 'Multimedia',
                url: 'https://monvalleyctc.org/',
                startDate: '2006',
                endDate: '2008'
            }
        ];
        public companies = [
            {
                icon: require('~/assets/images/fi360-icon.svg'),
                logo: require('~/assets/images/fi360-logo.svg'),
                name: 'Fi360',
                position: 'Software Engineer',
                url: 'https://www.fi360.com/',
                startDate: 'Jan 2018',
                endDate: 'Present'
            },
            {
                icon: require('~/assets/images/bvhllc-icon.svg'),
                logo: require('~/assets/images/bvhllc-logo.svg'),
                name: 'Berryville Holdings, LLC',
                position: 'Software Engineer',
                url: 'http://bvhllc.com/',
                startDate: 'February 2016',
                endDate: 'November 2017'
            },
            {
                icon: require('~/assets/images/acatar-icon.svg'),
                logo: require('~/assets/images/acatar-logo.svg'),
                name: 'Acatar',
                position: 'Software Engineer',
                url: 'https://www.learninghouse.com/',
                startDate: 'January 2015',
                endDate: 'January 2016'
            },
            {
                icon: require('~/assets/images/bb-icon.svg'),
                logo: require('~/assets/images/bb-logo.svg'),
                name: 'Branding Brand',
                position: 'Frontend Web Developer',
                url: 'https://www.brandingbrand.com/',
                startDate: 'November 2013',
                endDate: 'August 2014'
            },
            {
                icon: require('~/assets/images/ppg-icon.svg'),
                logo: require('~/assets/images/ppg-logo.svg'),
                name: 'PPG Architectural Coatings',
                position: 'Frontend Web Developer',
                url: 'http://corporate.ppg.com/Home.aspx',
                startDate: 'August 2012',
                endDate: 'November 2013'
            },
            {
                icon: require('~/assets/images/ptc-icon.svg'),
                logo: require('~/assets/images/ptc-logo.svg'),
                name: 'Pittsburgh Technical College',
                position: 'Visual Communications Assistant',
                url: 'https://www.ptcollege.edu/',
                startDate: 'August 2012',
                endDate: 'November 2013'
            }
        ];
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

<style lang="styl">
    section {
        border-bottom: 1px solid #efefef;
    }

    .skills, .experience {
        margin-top: -120px;
    }

    .inset-container {
        background: white;
        border-radius: 15px;
    }


</style>