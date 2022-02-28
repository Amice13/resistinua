<template>
  <div>
  <v-row justify="center" align="center" class="mb-0">
    <v-col cols="12" sm="10" md="8" class="mb-0">
      <v-card class="mx-auto mb-0" flat>
        <v-card-text class="text-h4 flex-grow-1 mb-0 pb-0">
          <div class="fill-height d-flex">
            <v-icon class="mr-4">mdi-check-outline</v-icon> Долучитися до надання психологічної допомоги
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
**Національна психологічна асоціація** запрошує психологів України долучитися до ініціативи з підтримки родин наших захисників **"Я БУДУ ТВОЇМ ТИЛОМ"**. Сьогодні ми хочемо запропонувати цивільним психологам також зробити свій внесок. Більшість з нас надає різні послуги у сфері підтримки психічного здоров’я, тож кожен з нас може запропонувати знижки, безплатний формат роботи чи окремі послуги для родин наших захисників. Тож ми запрошуємо вас долучитися до ініціативи відповідно до ваших компетенцій та специфіки роботи.

ЩО ВИ МОЖЕТЕ ЗАПРОПОНУВАТИ?

* знижки на консультації
* кількість  годин роботи з психологом безкоштовно
* місце у вашому розкладі практичної роботи безкоштовно
* окрему послугу, наприклад, профорієнтація для дитини захисника України зі знижкою чи безкоштовно
* групу підтримки для рідних (на лояльних умовах)
* формат роботи з дітьми захисників (на лояльних умовах)
* інше

**НФОРМАЦІЯ ПРО ВАС ТА ВАШУ ДОПОМОГУ БУДЕ РОЗМІЩЕНА НА ОКРЕМОМУ РЕСУРСІ, ТОМУ ЗАПОВНЮЮЧИ ЦЮ АНКЕТУ ВИ НАДАЄТЕ СВОЮ ЗГОДУ НА ПУБЛІКАЦІЮ ЦІЄЇ ІНФОРМАЦІЇ**. Альтернативно Ви можете залучитися до [волонтерської ініціативи](https://docs.google.com/forms/d/e/1FAIpQLSexWl1siLEuP6KQXxj7TC7bBrht0tPEAyJ9C9jMK7WeoWSEww/viewform)

[Подати заявку](https://docs.google.com/forms/d/e/1FAIpQLScuOfpOJkPjsf9rnyowO_JebgcZ6aWWxBw0sBQh-geszJIgLA/viewform#btn-center)

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