<template>
  <div>
  <v-row justify="center" align="center" class="mb-0">
    <v-col cols="12" sm="10" md="8" class="mb-0">
      <v-card class="mx-auto mb-0" flat>
        <v-card-text class="text-h4 flex-grow-1 mb-0 pb-0">
          <div class="fill-height d-flex">
            <v-icon class="mr-4">mdi-check-outline</v-icon> Облаштувати завали та барикади
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
У координації з військовими та представниками територіальної оборони облаштовуйте завали та барикади на важливих дорогах.

**Важливо:** [не блокуйте](https://dniprorada.gov.ua/uk/articles/item/49364/filatov-zaklikav-dnipryan-ne-rozstavlyati-samostijno-izhakiv-i-ogorozh-adzhe-ce-mozhe-paralizuvati-robotu-armijciv-i-proizd-shvidkih) дороги без чітких вказівок влади та/або військових, щоб не порушувати логістичних ланцюжків.

Для спорудження барикад можна використовувати мішки з піском, палети для укріплення, протитанкові їжаки та інші засоби для організації барикад на вулиці, використані автомобільні шини та [інші матеріали](https://t.me/KyivCityOfficial/2165).

[Джерело](https://www.facebook.com/SecurSerUkraine/posts/306813471545570#btn-center)

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
