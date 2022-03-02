<template>
  <div>
    <v-row justify="center" align="center" class="mb-0">
      <v-col cols="12" sm="10" md="8" class="mb-0">
        <v-card class="mx-auto mb-0" flat>
          <v-card-text class="text-h4 flex-grow-1 mb-0 pb-0">
            <div class="fill-height d-flex">
              <v-icon class="mr-4">mdi-check-outline</v-icon> Provide humanitarian assistance
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
If you can provide humanitarian assistance, please, [contact](https://varta1.com.ua/news/na-lvivshchini-organizovano-shtabi-kudi-mozhna-prinesti-gumanitarnu-dopomogu_341727.html) relevant regional centers.

National Bank of Ukraine opens fundraising account for humanitarian assistance to Ukrainians affected by Russia’s aggression.

This account accepts multiple currencies. It has been established and opened to receive transfers from international partners and donors both in foreign currency (U.S. dollars, euros, British pounds) and from Ukrainian business and citizens in hryvnias.

[Support Ukraine](https://bank.gov.ua/en/news/all/natsionalniy-bank-vidkriv-rahunok-dlya-gumanitarnoyi-dopomogi-ukrayintsyam-postrajdalim-vid-rosiyskoyi-agresiyi#btn-center)

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
