<template>
  <div>
  <v-row justify="center" align="center" class="mb-0">
    <v-col cols="12" sm="10" md="8" class="mb-0">
      <v-card class="mx-auto mb-0" flat>
        <v-card-text class="text-h4 flex-grow-1 mb-0 pb-0">
          <div class="fill-height d-flex">
            <v-icon class="mr-4">mdi-check-outline</v-icon> Знайти помешкання у випадку евакуації
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
Якщо вам необхідне помешкання далеко від власного дому, відвідайте онлайн-ресурс ["Прихисток"](https://prykhystok.in.ua/) та дізнайтеся про можливі варіанти. Альтернативно ви можете отримати таку інформацію від [Центру Спільних Дій](https://docs.google.com/forms/d/e/1FAIpQLSerQV8PufaIagMPTZ36mlNeVGOzElh_G-sXOAmNvZQUUXS9GQ/viewform).

[Перейти до ресурсу](https://prykhystok.in.ua/#btn-center)

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