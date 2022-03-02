<template>
  <div>
  <v-row justify="center" align="center" class="mb-0">
    <v-col cols="12" sm="10" md="8" class="mb-0">
      <v-card class="mx-auto mb-0" flat>
        <v-card-text class="text-h4 flex-grow-1 mb-0 pb-0">
          <div class="fill-height d-flex">
            <v-icon class="mr-4">mdi-check-outline</v-icon> Надати гуманітарну допомогу
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10" md="8">
      <v-card class="mx-auto mb-4 text-justify mw-100" flat>
        <v-card-text>
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
Якщо у Вас є можливість надати гуманітарну допомогу, то [звертайтеся](https://varta1.com.ua/news/na-lvivshchini-organizovano-shtabi-kudi-mozhna-prinesti-gumanitarnu-dopomogu_341727.html) до відповідних регіональних штабів.

Також Національний банк України [відкрив рахунок](https://bank.gov.ua/ua/news/all/natsionalniy-bank-vidkriv-rahunok-dlya-gumanitarnoyi-dopomogi-ukrayintsyam-postrajdalim-vid-rosiyskoyi-agresiyi) для **гуманітарної допомоги** українцям, постраждалим від російської агресії.

Рахунок – мультивалютний, створений та відкритий як для переказу коштів від міжнародних партнерів та донорів – у іноземній валюті (доларах США, євро, британських фунтах), так і від українського бізнесу та громадян – у національній валюті.

[Надати допомогу](https://bank.gov.ua/ua/news/all/natsionalniy-bank-vidkriv-rahunok-dlya-gumanitarnoyi-dopomogi-ukrayintsyam-postrajdalim-vid-rosiyskoyi-agresiyi#btn-center)

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
.mw-100 * {
  max-width: 100%;
}
</style>
