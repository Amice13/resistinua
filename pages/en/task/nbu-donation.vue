<template>
  <div>
  <v-row justify="center" align="center" class="mb-0">
    <v-col cols="12" sm="10" md="8" class="mb-0">
      <v-card class="mx-auto mb-0" flat>
        <v-card-text class="text-h4 flex-grow-1 mb-0 pb-0">
          <div class="fill-height d-flex">
            <v-icon class="mr-4">mdi-check-outline</v-icon> Make a donation to the National Bank of Ukraine to support the army
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
The National Bank of Ukraine [opened a special fundraising account](https://bank.gov.ua/ua/news/all/natsionalniy-bank-vidkriv-spetsrahunok-dlya-zboru-koshtiv-na-potrebi-armiyi) to **support the Armed Forces of Ukraine**. This decision is related to the imposition of martial law throughout Ukraine, the armed aggression by the Russian Federation, and the threat to Ukraine’s independence and territorial integrity.

The number of the special account is: **UA843000010000000047330992708**. This account accepts multiple currencies. It has been established and opened to receive transfers both from international partners and donors in foreign currency (US dollars, euros, UK pounds, Swiss francs, Australian, Canadian dollars, yuans, and yens) and from Ukrainian businesses and citizens in hryvnias. Support the Ukrainian Army today!

[Make a donation](https://www.liqpay.ua/en/checkout/card/checkout_1646032754185923_44585730_DKSlFoUHFetw6GaznQMM#btn-center)


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
