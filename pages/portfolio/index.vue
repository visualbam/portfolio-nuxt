<template>
    <div class="portfolio-page">
        <v-container fluid grid-list-sm pa-1>
            <v-layout row wrap>
                <v-flex xs12 sm6 md4 v-for="item in items" :key="item.image">
                    <img :src="item.image" class="image" alt="portfolio image" width="100%" height="100%">
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "nuxt-property-decorator";

    @Component({})
    export default class extends Vue {
        public items = [
            { image: require('~/assets/images/portfolio/machovy_header.png') },
            { image: require('~/assets/images/portfolio/pti_hvz.png') },
            { image: require('~/assets/images/portfolio/pti_newyears.png') },
            { image: require('~/assets/images/portfolio/gobucket_detail.png') },
            { image: require('~/assets/images/portfolio/visualbam_old_logo.png') },
            { image: require('~/assets/images/portfolio/gobucket_header.png') },
            { image: require('~/assets/images/portfolio/lfc_bottom.png') },
            { image: require('~/assets/images/portfolio/lfc_detail.png') },
            { image: require('~/assets/images/portfolio/machovy_blog_detail.png') },
            { image: require('~/assets/images/portfolio/creative_logo.png') },
            { image: require('~/assets/images/portfolio/pots_for_paws_logo.png') },
            { image: require('~/assets/images/portfolio/machovy_items.png') },
            { image: require('~/assets/images/portfolio/marianna_welcome.png') },
            { image: require('~/assets/images/portfolio/ob_header.png') },
            { image: require('~/assets/images/portfolio/ob_list.png') },
            { image: require('~/assets/images/portfolio/machovy_detail.png') },
            { image: require('~/assets/images/portfolio/ob_search.png') },
            { image: require('~/assets/images/portfolio/pixelspot_logo.png') },
            { image: require('~/assets/images/portfolio/ppg_career_detail.png') },
            { image: require('~/assets/images/portfolio/machovy_blog_recent.png') },
            { image: require('~/assets/images/portfolio/ppg_career_list.png') },
            { image: require('~/assets/images/portfolio/ppg_cc_friendslist.png') },
            { image: require('~/assets/images/portfolio/flatship_logo.png') },
            { image: require('~/assets/images/portfolio/ppg_cc_modal.png') },
            { image: require('~/assets/images/portfolio/ppg_newsletter.png') },
            { image: require('~/assets/images/portfolio/ppg_olympic_email.png') },
            { image: require('~/assets/images/portfolio/ppg_voc_homepage.png') },
            { image: require('~/assets/images/portfolio/prenulin_logo.png') },
            { image: require('~/assets/images/portfolio/pti_bellybuster.png') },
            { image: require('~/assets/images/portfolio/pti_calendar.png') },
            { image: require('~/assets/images/portfolio/pti_carnival.png') },
            { image: require('~/assets/images/portfolio/pti_community.png') },
            { image: require('~/assets/images/portfolio/pti_esop.png') },
            { image: require('~/assets/images/portfolio/pti_evening.png') },
            { image: require('~/assets/images/portfolio/pti_fallfestival.png') },
            { image: require('~/assets/images/portfolio/pti_headstart.png') },
            { image: require('~/assets/images/portfolio/reward_logo.png') },
            { image: require('~/assets/images/portfolio/pti_os.png') },
            { image: require('~/assets/images/portfolio/tap1_logo.png') },
            { image: require('~/assets/images/portfolio/pti_rvhps.png') },
            { image: require('~/assets/images/portfolio/tap2_logo.png') },
            { image: require('~/assets/images/portfolio/pti_stpatrick.png') },
            { image: require('~/assets/images/portfolio/pti_summercamp.png') },
            { image: require('~/assets/images/portfolio/pti_welcome.png') },
            { image: require('~/assets/images/portfolio/scrum_logo.png') },
            { image: require('~/assets/images/portfolio/resume_old.png') },
            { image: require('~/assets/images/portfolio/viva_logo.png') },
        ];
    }
</script>