<template>
  <div>
  <v-row justify="center" align="center" class="mb-0">
    <v-col cols="12" sm="10" md="8" class="mb-0">
      <v-card class="mx-auto mb-0" flat>
        <v-card-text class="text-h4 flex-grow-1 mb-0 pb-0">
          <div class="fill-height d-flex">
            <v-icon class="mr-4">mdi-check-outline</v-icon> Повідомити про про російські війська, техніку та ворожі ДРГ
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
Ворог і надалі підступно обстрілює наші міста, мирне населення та намагається прорвати оборону в різних куточках Батьківщини.

Повідомляйте через офіційний чат-бот у Telegram про російські війська, техніку та ворожі ДРГ. Пересування українських військ навпаки не світимо.

### Як відрізнити українську техніку від російських окупантів?

* **Російська техніка** має темно-зелений та болотний окрас. Іноді присутній трикольоровий окрас.
* **Українська техніка** має окрас у вигляді «пікселю» або темно-зелений колір, близький до оливового кольору 

Техніка окупантів, яка поки що рухається нашою країною має додаткові ознаки, які вказують на напрям руху:

* Косу лінію на кузові – на Херсон.
* Мітка Z на кузові — наступ на Харків, також на цьому напрямку помічена Росгвардія (кадирівці). Нині така техніка з під Сум їде на Київ.
* Трикутник – для підрозділів на Слов'янськ та Краматорськ.
* Коло – для мобільного резерву.

Знімайте на відео пересування цієї техніки та викладайте у соцмережі під хештегом [#війна_проти_україни](https://www.facebook.com/hashtag/війна_проти_україни).

[Повідомити МВС](https://t.me/stop_russian_war_bot#btn-center)

[Джерело](https://www.facebook.com/SecurSerUkraine/posts/306813471545570)
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