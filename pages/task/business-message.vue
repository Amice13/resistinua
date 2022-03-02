<template>
  <div>
  <v-row justify="center" align="center" class="mb-0">
    <v-col cols="12" sm="10" md="8" class="mb-0">
      <v-card class="mx-auto mb-0" flat>
        <v-card-text class="text-h4 flex-grow-1 mb-0 pb-0">
          <div class="fill-height d-flex">
            <v-icon class="mr-4">mdi-check-outline</v-icon> Писати іноземному бізнесу щодо припинення співпраці з Росією
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
Міжнародні компанії можуть допомогти Україні — вони мають перестати працювати в росії і фінансувати її армію своїми податками.

Ми закликаємо усі міжнародні компанії припинити роботу в росії! 

Долучайтесь і ви до інформаційної кампанії: пишіть листи і пости в соцмережах. 

1. Оберіть з переліку бренд: https://bit.ly/sbir_companies 
2. Надішліть йому на пошту лист: https://bit.ly/sbir_letter 
3. Запостіть один з цих текстів у своїх соцмережах і тегніть бренд: https://bit.ly/sbir_texts 
4. Використайте одну з цих картинок: https://bit.ly/sbir_photos

[Джерело](https://www.facebook.com/TransparencyInternationalUkraine/posts/5210228465664815)

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