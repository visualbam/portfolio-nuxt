<template>
    <div class="resume-page">
        <v-container>
            <v-layout row wrap>
                <v-flex>
                    <h1>Bruce McElroy</h1>
                    <span class="grey--text"><strong>Software Engineer</strong> - Greater Pittsburgh Area </span><br><br>
                    <p>I am a front end developer by day... and a front end developer by night. I continue working on personal projects after "work" hours. I strive to be challenged and I am very self motivated. My goal is to be an asset to your company and wear multiple hats to help streamline projects. Currently I'm deep diving into Javascript and exploring design patterns. I'm also a proficient designer with a focus on UI/UX.</p>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container grid-list-lg>
            <v-layout row wrap>
                <v-flex md-6 pr-4>
                    <h2>Work Experience</h2>
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
                                        <v-list-tile-sub-title>{{company.startDate}} - {{company.endDate}}</v-list-tile-sub-title>
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
                <v-flex md-6 pl-4>
                    <h2>Education</h2>
                    <v-list three-line>
                        <template>
                            <div v-for="school in schools" :key="school.name">
                                <v-subheader>{{school.degree}}</v-subheader>
                                <v-divider></v-divider>
                                <v-list-tile>
                                    <v-list-tile-content>
                                        <v-list-tile-title>{{school.name}}</v-list-tile-title>
                                        <v-list-tile-sub-title>{{school.startDate}} - {{school.endDate}}</v-list-tile-sub-title>
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
        </v-container>
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
                icon: require('~/assets/fi360-icon.svg'),
                logo: require('~/assets/fi360-logo.svg'),
                name: 'Fi360',
                position: 'Software Engineer',
                url: 'https://www.fi360.com/',
                startDate: 'Jan 2018',
                endDate: 'Present'
            },
            {
                icon: require('~/assets/bvhllc-icon.svg'),
                logo: require('~/assets/bvhllc-logo.svg'),
                name: 'Berryville Holdings, LLC',
                position: 'Software Engineer',
                url: 'http://bvhllc.com/',
                startDate: 'February 2016',
                endDate: 'November 2017'
            },
            {
                icon: require('~/assets/acatar-icon.svg'),
                logo: require('~/assets/acatar-logo.svg'),
                name: 'Acatar',
                position: 'Software Engineer',
                url: 'https://www.learninghouse.com/',
                startDate: 'January 2015',
                endDate: 'January 2016'
            },
            {
                icon: require('~/assets/bb-icon.svg'),
                logo: require('~/assets/bb-logo.svg'),
                name: 'Branding Brand',
                position: 'Frontend Web Developer',
                url: 'https://www.brandingbrand.com/',
                startDate: 'November 2013',
                endDate: 'August 2014'
            },
            {
                icon: require('~/assets/ppg-icon.svg'),
                logo: require('~/assets/ppg-logo.svg'),
                name: 'PPG Architectural Coatings',
                position: 'Frontend Web Developer',
                url: 'http://corporate.ppg.com/Home.aspx',
                startDate: 'August 2012',
                endDate: 'November 2013'
            },
            {
                icon: require('~/assets/ptc-icon.svg'),
                logo: require('~/assets/ptc-logo.svg'),
                name: 'Pittsburgh Technical College',
                position: 'Visual Communications Assistant',
                url: 'https://www.ptcollege.edu/',
                startDate: 'August 2012',
                endDate: 'November 2013'
            }
        ];
    }
</script>