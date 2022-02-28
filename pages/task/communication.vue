<template>
  <div>
  <v-row justify="center" align="center" class="mb-0">
    <v-col cols="12" sm="10" md="8" class="mb-0">
      <v-card class="mx-auto mb-0" flat>
        <v-card-text class="text-h4 flex-grow-1 mb-0 pb-0">
          <div class="fill-height d-flex">
            <v-icon class="mr-4">mdi-check-outline</v-icon> Забезпечити себе засобами комунікації
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
Державна служба спеціального зв’язку [повідомила](https://www.radiosvoboda.org/a/news-derzhspeczvyazku-pro-mobilnyi-zvyazok/31720023.html), що відключення мобільного зв’язку та інтернету на території України не буде. Але звернула увагу на те, що перебої зі зв’язком можливі і пов’язані передусім із тим, що мережі перенавантажені.

Щоб убезпечити себе та рідних, встановіть один із мобільних додатків, які працюють без інтернету та використовують спеціальне шифрування, щоб листування було безперевним та конфіденційним.

[Встановити Briar](https://play.google.com/store/apps/details?id=org.briarproject.briar.android#btn-center)

[Встановити Signal на Android](https://play.google.com/store/apps/details?id=org.thoughtcrime.securesms#btn-center)

[Встановити Signal на iOS](https://apps.apple.com/us/app/signal-private-messenger/id874139669#btn-center)

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