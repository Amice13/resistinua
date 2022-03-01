<template>
  <div>
  <v-row justify="center" align="center" class="mb-0">
    <v-col cols="12" sm="10" md="8" class="mb-0">
      <v-card class="mx-auto mb-0" flat>
        <v-card-text class="text-h4 flex-grow-1 mb-0 pb-0">
          <div class="fill-height d-flex">
            <v-icon class="mr-4">mdi-check-outline</v-icon> Знищити мітки на об'єктах інфрастуктури
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
На дорогах та об’єктах інфраструктури ви можете побачити знаки для інформування російських військ, в тому числі і вночі!

Будьте уважні та обов'язково знищуйте відповідні позначки!

Також ви можете повідомити про місцезнаходження позначок через телеграм-бот [@ukraine_avanger_bot](https://t.me/ukraine_avanger_bot) або на телефон 102.

Якщо ви помітили людей, які роблять подібні мітки, одразу повідомте про точну геолокацію, особливі прикмети людини і, за можливості, напрямок її пересування.

![відмітка на дорозі](/task/remove-targets/01.jpg) ![відмітка на дорозі](/task/remove-targets/02.jpg) ![відмітка на дорозі](/task/remove-targets/03.jpg)


[Джерело](https://t.me/operativnoZSU/8550)
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
