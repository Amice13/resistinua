<template>
  <div>
  <v-row justify="center" align="center" class="mb-0">
    <v-col cols="12" sm="10" md="8" class="mb-0">
      <v-card class="mx-auto mb-0" flat>
        <v-card-text class="text-h4 flex-grow-1 mb-0 pb-0">
          <div class="fill-height d-flex">
            <v-icon class="mr-4">mdi-check-outline</v-icon> Help with translation, proofreading, writing texts
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
If you can translate, proofread, or write texts in languages other than Ukrainian, you can join the [Translations for Ukraine Telegram channel](https://t.me/TranslatorsForUkraine) (“Переклади для України”).

[Join now](https://t.me/TranslatorsForUkraine#btn-center)
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