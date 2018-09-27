<template>
    <div class="home-page">
        <v-layout row wrap py-5>
            <v-flex>
                <h1 class="display-1">Bruce Aaron McElroy</h1>
                <span class="grey--text"><strong>Designer, Full Stack Developer & Mentor</strong> - Greater Pittsburgh Area </span><br><br>
                <p class="body-2">I am a front end developer by day... and a front end developer by night. I continue
                    working on
                    personal projects after "work" hours. I strive to be challenged and I am very self motivated. </p>

                <!--<p class="body-1">My goal is to be an asset to your company and wear multiple hats to help streamline projects. Currently-->
                    <!--I'm deep diving into Javascript and exploring design patterns. I'm also a proficient designer with a-->
                    <!--focus on UI/UX.</p>-->

                <!--<h1 class="subheading">I design, prototype and iterate to create applications that are beautiful and-->
                <!--solve problems.</h1>-->

                <!--<p class="body-1">As a software engineer, I enjoy bridging the gap between engineering and design —-->
                <!--combining my technical knowledge with my keen eye for design to create a beautiful product. My-->
                <!--goal is to always build applications that are scalable and efficient under the hood while-->
                <!--providing engaging, pixel-perfect user experiences.</p>-->

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
        <v-layout row wrap pb-5>
            <v-flex xs12 md6>
                <h2 class="title">Work Experience</h2>
                <v-list three-line>
                    <template>
                        <div v-for="company in companies" :key="company.name">
                            <v-subheader>{{company.position}}</v-subheader>
                            <v-divider></v-divider>
                            <v-list-tile>
                                <v-list-tile-avatar>
                                    <img :src="company.icon" alt="">
                                </v-list-tile-avatar>
                                <v-list-tile-content>
                                    <v-list-tile-title>{{company.name}}</v-list-tile-title>
                                    <v-list-tile-sub-title>{{company.startDate}} - {{company.endDate}}
                                    </v-list-tile-sub-title>
                                </v-list-tile-content>
                                <v-list-tile-action>
                                    <a v-if="company.url" :href="company.url" target="_blank">
                                        <v-btn flat icon color="primary">
                                            <v-icon>link</v-icon>
                                        </v-btn>
                                    </a>
                                </v-list-tile-action>
                            </v-list-tile>
                        </div>
                    </template>
                </v-list>
            </v-flex>
            <v-flex xs12 md6>
                <h2 class="title">Education</h2>
                <v-list three-line>
                    <template>
                        <div v-for="school in schools" :key="school.name">
                            <v-subheader>{{school.degree}}</v-subheader>
                            <v-divider></v-divider>
                            <v-list-tile>
                                <v-list-tile-content>
                                    <v-list-tile-title>{{school.name}}</v-list-tile-title>
                                    <v-list-tile-sub-title>{{school.startDate}} - {{school.endDate}}
                                    </v-list-tile-sub-title>
                                </v-list-tile-content>
                                <v-list-tile-action>
                                    <a v-if="school.url" :href="school.url" target="_blank">
                                        <v-btn flat icon color="primary">
                                            <v-icon>link</v-icon>
                                        </v-btn>
                                    </a>
                                </v-list-tile-action>
                            </v-list-tile>
                        </div>
                    </template>
                </v-list>
            </v-flex>
        </v-layout>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "nuxt-property-decorator";

    @Component({})
    export default class extends Vue {
        public schools = [
            {
                name: 'Pittsburgh Technical College',
                degree: 'Graphic Design',
                url: 'https://www.ptcollege.edu/',
                startDate: '2009',
                endDate: '2011'
            },
            {
                name: 'Mon Valley Career and Technology Center',
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
    }
</script>