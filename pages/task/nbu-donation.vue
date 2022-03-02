<template>
  <div>
  <v-row justify="center" align="center" class="mb-0">
    <v-col cols="12" sm="10" md="8" class="mb-0">
      <v-card class="mx-auto mb-0" flat>
        <v-card-text class="text-h4 flex-grow-1 mb-0 pb-0">
          <div class="fill-height d-flex">
            <v-icon class="mr-4">mdi-check-outline</v-icon> Здійснити внесок на потреби армії до Національного банку України
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
Національний банк України [відкрив](https://bank.gov.ua/ua/news/all/natsionalniy-bank-vidkriv-spetsrahunok-dlya-zboru-koshtiv-na-potrebi-armiyi) **спеціальний рахунок для збору коштів на підтримку Збройних Сил України**. Таке рішення ухвалене у зв’язку із введенням воєнного стану в Україні, збройною агресією РФ та небезпекою для державної незалежності України, її територіальної цілісності.

Реквізити офіційного спеціального рахунку: **UA843000010000000047330992708**. Рахунок – мультивалютний, він створений та відкритий як для переказу коштів від міжнародних партнерів та донорів – у іноземній валюті (доларах США, євро, британських фунтах, швейцарських франках, австралійських, канадських доларах, юані Женьміньбі та єнах), так і від українського бізнесу та громадян – у національній валюті. Підтримайте Українську Армію вже сьогодні!

[Здійснити внесок](https://www.liqpay.ua/en/checkout/card/checkout_1646032754185923_44585730_DKSlFoUHFetw6GaznQMM#btn-center)


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
