<template>
  <div>
  <v-row justify="center" align="center" class="pb-0">
    <v-col cols="12" sm="10" md="8">
      <v-card class="mx-auto ma-0" flat>
        <v-card-text class="text-h4 flex-grow-1 pb-0">
          <div class="fill-height d-flex">
            <v-icon class="mr-4">mdi-newspaper-variant-outline</v-icon> Новини
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
  <v-row justify="center" align="center">
    <v-col cols="12" md="8">
      <v-card class="text-justify ma-0" flat>
        <v-card-text>
          <p>Оперативні новини з офіційних джерел</p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
  <v-row justify="center" align="center">
    <v-col cols="12" class="pt-0">
      <v-card class="text-justify ma-0" flat>
        <v-card-text class="pt-0">
          <v-row>
          <v-col cols="12 mx-auto" md="8" class="pt-0">
            <v-card color="lighten-3" class="text-justify pa-0" flat>
              <v-card-text class="pa-0">
                <v-row class="pt-2">
                  <v-card class="w-100 mb-4" v-for="(item, index) in news" :key="'news-' + index">
                    <v-card-title class="display-1 mb-2">
                      {{ item.author }}
                    </v-card-title>
                    <v-card-subtitle>
                      <v-icon small>mdi-eye</v-icon> {{ item.views }} | {{ new Date(item.date).toLocaleString('uk') }}
                    </v-card-subtitle>
                    <v-card-text v-html="shortText(item.text)">
                    </v-card-text>
                    <v-card-actions>
                      <v-btn :to="'/new/' + item.id" text color="blue darken-3">Читати</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
  </div>
</template>

<script>
import jsonp from 'jsonp'
import tasks from '@/static/content/tasks'

export default {
  async mounted () {
    jsonp('https://api.resist.in.ua/posts/', {}, (err, news) => {
      if (err) {
        console.error(err.message)
      } else {
        this.$set(this, 'news', news)
      }
    })
  },
  data () {
    return {
      news: []
    }
  },
  methods: {
    shortText (s) {
      let shortened = s.replace(/<br.*/gis,'')
      return shortened.length < 300 ? s.replace(/(<br.*?)<br.*/gis, '$1') : shortened
    }
  },
  computed: {
  }
}
</script>