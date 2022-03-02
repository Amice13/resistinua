<template>
  <div>
  <v-row justify="center" align="center" class="mb-0">
    <v-col cols="12" sm="10" md="8" class="mb-0">
      <v-card class="mx-auto mb-0" flat>
        <v-card-text class="text-h4 flex-grow-1 mb-0 pb-0">
          <div class="fill-height d-flex">
            <v-icon class="mr-4">mdi-check-outline</v-icon> Ensure you use reliable sources of information
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
  <v-row justify="center" align="center" class="mt-0">
    <v-col cols="12" sm="10" md="8" class="mt-0">
      <v-card class="mx-auto mb-4 text-justify mw-100 mt-0" flat>
        <v-card-text class="remove-targets">
          <vue-markdown>
            {{ text }}
          </vue-markdown>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
  </div>
</template>

<style>
.quote .v-responsive__content {
  display: flex;
  flex-direction: column;
}
</style>

<script>

import VueMarkdown from 'vue-markdown'

const text = `
During military actions, it is important to avoid disinformation. To receive reliable, timely and accurate information, subscribe to the following sources.

## OFFICIAL SOURCES

* [Office of the President of Ukraine](https://www.president.gov.ua/en/news/administration)
* [General Staff of the Ukrainian Armed Forces](https://www.facebook.com/GeneralStaff.ua) (ukr)
* [Government of Ukraine](https://www.kmu.gov.ua/en)
* [Ministry of Defence of Ukraine](https://www.mil.gov.ua/en/)
* [Ministry of Internal Affairs of Ukraine](https://www.facebook.com/mvs.gov.ua) (ukr)
* [National Police of Ukraine](https://www.facebook.com/UA.National.Police) (ukr)
* [State Emergency Service of Ukraine](https://www.facebook.com/MNS.GOV.UA) (ukr)
* [State Border Guard Service of Ukraine](https://www.facebook.com/DPSUkraine)
* [Centre for Strategic Communication](https://www.facebook.com/StratcomCentreUA) (ukr)
* [State Special Communications Service of Ukraine](https://www.facebook.com/dsszzi) (ukr)
* [Ukrainian Ground Forces](https://www.facebook.com/UkrainianLandForces) (ukr)
* [Ukrainian Naval Forces](https://www.facebook.com/navy.mil.gov.ua) (ukr)
* [Territorial Defence Forces](https://www.facebook.com/TerritorialDefenseForces) (ukr)

## MEDIA

**Svidomi media (ukr):**

* https://t.me/svidomi_ua
* https://www.instagram.com/svidomi_ua/
* https://www.instagram.com/svidomi_ua_reserv/
* https://www.facebook.com/svidomi.news 

**Hromadske (ukr)**:

* https://t.me/hromadske_ua 
* https://www.instagram.com/hromadske.ua/ 
* https://www.facebook.com/hromadskeua

**NZL (ukr)**

* https://www.instagram.com/nzl.media/ 
* https://www.facebook.com/nzl.media
`

export default {
  components: { VueMarkdown },
  async mounted () {
  },
  data () {
    return {
      fab: false,
    }
  },
  computed: {
    text () {
      return text
    }
  }
}
</script>

<style>

img[src$='#w-100'] {
  width: 100%;
}
.remove-targets img {
  display: inline-block;
  width: 33%;
}

</style>