<template>
  <div>
  <v-row justify="center" align="center" class="pb-0">
    <v-col cols="12" sm="10" md="8">
      <v-card class="mx-auto ma-0" flat>
        <v-card-text class="text-h4 flex-grow-1 pb-0">
          <div class="fill-height d-flex">
            <v-icon class="mr-4">mdi-message-reply-outline</v-icon> Офіційні звернення
          </div>
          <p class="subtitle-1 mt-4">З 18 ТРАВНЯ ПРАЦЮЄ ТІЛЬКИ В РЕЖИМІ АРХІВУ. Ви можете ознаймитися із останніми відео на <a href="https://www.youtube.com/user/PresidentGovUa/videos">офіційному каналі Офісу Президента України</a> та прочитати матеріали на <a href="https://www.president.gov.ua/news/speeches">офіційному сайті.</a></p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
  <v-row justify="center" align="center">
    <v-col cols="12" md="8">
      <v-card class="ma-0" flat>
        <v-card-text>
          <v-row>
          <v-col cols="12" md="4" class="pt-0">
            <v-card color="blue-grey lighten-4" class="text-justify" flat>
              <v-card-title class="pb-0">
                Фільтри
              </v-card-title>
              <v-card-text class="pa-4 pt-0">

                <!-- General filters -->
                <v-checkbox v-model="signLanguageOnly" label="Наявний сурдопереклад" hide-details></v-checkbox>
                <v-checkbox v-model="russianMessage" label="Містить звернення російською" hide-details></v-checkbox>

                <!-- Speaker filter -->
                <div v-show="filtersBySpeaker.length" class="mt-6" @click="showSpeaker = !showSpeaker">
                  <strong>Фільтр за спікером</strong>
                  <v-icon style="cursor: pointer; float: right;">{{ showSpeaker ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </div>
                <v-scroll-y-transition>
                  <v-list dense color="blue-grey lighten-4" class="w-100" v-show="showSpeaker">
                    <v-list-item-group v-model="filterSpeaker" multiple>
                      <v-list-item v-for="filter in filtersBySpeaker" :key="filter">
                        <template v-slot:default="{ active }">
                          <v-list-item-action class="mr-4 mb-0 mt-0">
                            <v-checkbox :input-value="active"></v-checkbox>
                          </v-list-item-action>
                          <v-list-item-content>
                            <v-list-item-title>{{ $t(filter) }}</v-list-item-title>
                          </v-list-item-content>
                        </template>
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>                
                </v-scroll-y-transition>

                <!-- Topic filter -->
                <div v-show="filtersByTopic.length" class="mt-6" @click="showTopic = !showTopic">
                  <strong>Фільтр за темою</strong>
                  <v-icon style="cursor: pointer; float: right;">{{ showTopic ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </div>
                <v-scroll-y-transition>
                  <v-list dense color="blue-grey lighten-4" class="w-100" v-show="showTopic">
                    <v-list-item-group v-model="filterTopic" multiple>
                      <v-list-item v-for="filter in filtersByTopic" :key="filter">
                        <template v-slot:default="{ active }">
                          <v-list-item-action class="mr-4 mb-0 mt-0">
                            <v-checkbox :input-value="active"></v-checkbox>
                          </v-list-item-action>
                          <v-list-item-content>
                            <v-list-item-title>{{ $t(filter) }}</v-list-item-title>
                          </v-list-item-content>
                        </template>
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>                
                </v-scroll-y-transition>

                <!-- City filter -->
                <div v-show="filtersByCity.length" class="mt-6" @click="showCity = !showCity">
                  <strong>Фільтр за містами</strong>
                  <v-icon style="cursor: pointer; float: right;">{{ showCity ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </div>
                <v-scroll-y-transition>
                  <v-list dense color="blue-grey lighten-4" class="w-100" v-show="showCity">
                    <v-list-item-group v-model="filterCity" multiple>
                      <v-list-item v-for="filter in filtersByCity" :key="filter">
                        <template v-slot:default="{ active }">
                          <v-list-item-action class="mr-4 mb-0 mt-0">
                            <v-checkbox :input-value="active"></v-checkbox>
                          </v-list-item-action>
                          <v-list-item-content>
                            <v-list-item-title>{{ $t(filter) }}</v-list-item-title>
                          </v-list-item-content>
                        </template>
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>                
                </v-scroll-y-transition>

                <!-- Dates filter -->
                <div class="mt-6" @click="showDate = !showDate">
                  <strong>Фільтр за датою</strong>
                  <v-icon style="cursor: pointer; float: right;">{{ showDate ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </div>
                <v-scroll-y-transition>
                  <v-list dense color="blue-grey lighten-4" class="w-100" v-show="showDate">
                    <v-list-item-group v-model="filterDate">
                      <v-list-item v-for="filter in filtersByDate" :key="filter">
                        <template v-slot:default="{ active }">
                          <v-list-item-action class="mr-4 mb-0 mt-0">
                            <v-checkbox :input-value="active"></v-checkbox>
                          </v-list-item-action>
                          <v-list-item-content>
                            <v-list-item-title>{{ $t(filter) }}</v-list-item-title>
                          </v-list-item-content>
                        </template>
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>                
                </v-scroll-y-transition>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="8" class="pt-0">
            <v-card color="lighten-3" class="pa-0" flat>
              <v-card-text class="pa-0">
                <v-row v-if="filteredMessages.length === 0">
                  <v-col cols="12" class="text-center">
                    На жаль, за вашими фільтрами немає жодної інформації
                  </v-col>
                </v-row>

                <v-row v-if="filteredMessages.length">
                  <v-col cols="12" md="5">
                    <div class="video w-100">
                      <iframe class="w-100" :src="'https://www.youtube.com/embed/' + filteredMessages[0].id" :title="filteredMessages[0].name" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                  </v-col>
                  <v-col cols="12" md="7">
                    <NuxtLink class="text-h5 blue--text text-inherit" style="text-decoration: none; text-align: left !important;" :to="'/message/' + filteredMessages[0].id">{{ filteredMessages[0].name }}</NuxtLink>
                    <div class="small">
                      <small><strong>
                        {{ new Date(filteredMessages[0].date).toLocaleDateString('uk', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }) }}
                      </strong></small>
                    </div>
                    <div class="text-justify">{{ filteredMessages[0].description }}</div>
                  </v-col>
                </v-row>
                <v-row class="pt-2" style="border-top: 1px solid #ccc;" v-if="filteredMessages.length > 1">
                  <v-list three-line class="w-100">
                    <v-list-item v-for="(item, index) in filteredMessages.slice(1)" :key="'video-' + index" :to="'/message/' + item.id">
                      <template>
                        <v-list-item-action class="text-right" :class="{ 'mr-6': $vuetify.breakpoint.smAndDown }">
                          <div>
                            <strong>{{ new Date(item.date).toLocaleTimeString('uk', { hour: '2-digit', minute: '2-digit' }) }}</strong>
                            <br/>
                            <span :class="{ 'x-small': $vuetify.breakpoint.smAndDown }">{{ new Date(item.date).toLocaleDateString('uk', { year: 'numeric', month: 'numeric', day: 'numeric' }) }}</span>
                          </div>
                        </v-list-item-action>

                        <v-list-item-content>
                          <v-list-item-title class="blue--text">{{ item.name }}</v-list-item-title>
                          <v-list-item-subtitle>{{ item.description }}</v-list-item-subtitle>
                        </v-list-item-content>
                      </template>
                    </v-list-item>
                  </v-list>
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

<style>
.quote .v-responsive__content {
  display: flex;
  flex-direction: column;
}
</style>

<script>

import VueMarkdown from 'vue-markdown'
import messages from '@/static/content/messages'

const intersection = (arr1, arr2) => {
  return arr1.filter(value => arr2.includes(value))
}

const getFilters = (arr, field) => {
  let filters = arr.map(el => el[field])
  filters = [].concat.apply([], filters)
  filters = [... new Set(filters)]
  filters = filters.filter(Boolean)
  filters.sort((a, b) => a.localeCompare(b))
  return filters
}

export default {
  components: { VueMarkdown },
  async mounted () {
    this.$set(this, 'filtersBySpeaker', getFilters(messages, 'speaker'))
    this.$set(this, 'filtersByCity', getFilters(messages, 'cities'))
    this.$set(this, 'filtersByTopic', getFilters(messages, 'topics'))
    this.$set(this, 'messages', messages)
  },
  data () {
    return {
      messages: [],
      filterSpeaker: [],
      filterCity: [],
      filterTopic: [],
      filterDate: undefined,
      showSpeaker: true,
      showCity: false,
      showTopic: false,
      showDate: false,
      filtersBySpeaker: [],
      filtersByCity: [],
      filtersByTopic: [],
      filtersByDate: ['Сьогодні', 'Вчора', 'Два дні назад', 'Більше трьох днів назад'],
      signLanguageOnly: false,
      russianMessage: false
    }
  },
  computed: {
    filteredMessages () {
      let filteredMessages = this.messages
      let filtersBySpeaker = this.filterSpeaker.map(el => this.filtersBySpeaker[el])
      let filtersByCity = this.filterCity.map(el => this.filtersByCity[el])
      let filtersByTopic = this.filterTopic.map(el => this.filtersByTopic[el])
      if (filtersBySpeaker.length) filteredMessages = filteredMessages.filter(el => el.speaker ? intersection(filtersBySpeaker, el.speaker).length : false)
      if (filtersByCity.length) filteredMessages = filteredMessages.filter(el => el.cities ? intersection(filtersByCity, el.cities).length : false)
      if (filtersByTopic.length) filteredMessages = filteredMessages.filter(el => el.topics ? intersection(filtersByTopic, el.topics).length : false)
      if (typeof this.filterDate !== 'undefined') {
        let date = new Date().setDate(new Date().getDate() - this.filterDate)
        date = new Date(date)
        if (this.filterDate === 3) {
          filteredMessages = filteredMessages.filter(el => {
            return new Date(el.date) < date
          })
        } else {
          date = date.toISOString().substr(0, 10)
          console.log(date)
          filteredMessages = filteredMessages.filter(el => {
            return el.date.indexOf(date) !== -1
          })
        }
      }
      if (this.signLanguageOnly) filteredMessages = filteredMessages.filter(el => el.translated)
      if (this.russianMessage) filteredMessages = filteredMessages.filter(el => el.russianTimestamp)
      return filteredMessages
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

.v-input--selection-controls__ripple {
  min-width: 34px;
}
</style>