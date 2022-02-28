<template>
  <div>
  <v-row justify="center" align="center" class="mb-0">
    <v-col cols="12" sm="10" md="8" class="mb-0">
      <v-card class="mx-auto mb-0" flat>
        <v-card-text class="text-h4 flex-grow-1 mb-0 pb-0">
          <div class="fill-height d-flex">
            <v-icon class="mr-4">mdi-check-outline</v-icon> Зафіксувати військові злочини
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
Команда адвокатів Gentls збирає докази військових злочинів російського командування проти жителів Києва та цивільних об'єктів.

В якості доказів можуть бути використані відео матеріали, фото зруйнованих цивільних об'єктів, акти огляду руйнувань, фото копії протоколів огляду місця події, протоколи опитування очевидців та інші документи.

Що треба робити:

* В разі пошкодження цивільного об‘єкту – викликати слідчо-оперативну группу за номером 102;
* Свідкам надати пояснення правоохоронцям та за можливості зробити фотокопію протоколу опитування та огляду місця події;
* Зробити фото та відео місця події, де на камеру зазначити адресу, дату та орієнтовний час пошкодження. Якщо відомо – причину пошкодження.

Будь-ласка, відправляйте інформацію на **[office@gentls.com]**.

Далі ми будемо діяти разом з колегами із Мінюсту та Іван Ліщина та підтримуватимемо probono український уряд в міжнародних судових процесах.

[Відправити інформацію](mailto:office@gentls.com)

[Джерело](https://pravo.ua/iak-zafiksuvaty-viiskovi-zlochyny-rosii/)
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