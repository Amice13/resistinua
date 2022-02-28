<template>
  <div>
  <v-row justify="center" align="center" class="pb-0">
    <v-col cols="12" sm="10" md="8">
      <v-card class="mx-auto ma-0" flat>
        <v-card-text class="text-h4 flex-grow-1 pb-0">
          <div class="fill-height d-flex">
            <v-icon class="mr-4">mdi-check-outline</v-icon> Завдання
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
  <v-row justify="center" align="center">
    <v-col cols="12" md="8">
      <v-card class="text-justify ma-0" flat>
        <v-card-text>
          <p>Долучайтеся до допомоги Україні вже сьогодні!</p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
  <v-row justify="center" align="center">
    <v-col cols="12" md="8" class="pt-0">
      <v-card class="text-justify ma-0" flat>
        <v-card-text class="pt-0">
          <v-row>
          <v-col cols="12" md="4" class="pt-0">
            <v-card color="blue-grey lighten-4" class="text-justify" flat>
              <v-card-title class="pb-0">
                Фільтри
              </v-card-title>
              <v-card-text class="pa-4 pt-0">

                <!-- Type filter -->
                <div v-show="filtersBySkills.length" class="mt-6" @click="showSkills = !showSkills">
                  <strong>Фільтр за навичками</strong>
                  <v-icon style="cursor: pointer; float: right;">{{ showSkills ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </div>
                <v-scroll-y-transition>
                  <v-list dense color="blue-grey lighten-4" class="w-100" v-show="showSkills">
                    <v-list-item-group v-model="filterSkills" multiple>
                      <v-list-item v-for="filter in filtersBySkills" :key="filter">
                        <template v-slot:default="{ active }">
                          <v-list-item-action class="mr-4 mb-0 mt-0">
                            <v-checkbox :input-value="active"></v-checkbox>
                          </v-list-item-action>
                          <v-list-item-content>
                            <v-list-item-title>{{ filter }}</v-list-item-title>
                          </v-list-item-content>
                        </template>
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>
                </v-scroll-y-transition>

                <!-- Topic filter -->
                <div v-show="filtersByTopic.length" class="mt-6" @click="showTopic = !showTopic">
                  <strong>Фільтр за видом діяльності</strong>
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
                            <v-list-item-title>{{ filter }}</v-list-item-title>
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
            <v-card color="lighten-3" class="text-justify pa-0" flat>
              <v-card-text class="pa-0">
                <v-row v-if="filtered.length === 0">
                  <v-col cols="12" class="text-center">
                    На жаль, за вашими фільтрами немає жодного завдання
                  </v-col>
                </v-row>
                <v-row v-else class="pt-2">
                  <v-list class="w-100">
                    <v-list-item to="/task/add-task" class="orange lighten-4">
                      <template>
                        <v-list-item-action class="text-right" :class="{ 'break-word': $vuetify.breakpoint.smAndDown }">
                          <v-icon>mdi-refresh</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                          <v-list-item-title class="blue--text">Додати завдання або інформацію</v-list-item-title>
                        </v-list-item-content>
                      </template>
                    </v-list-item>
                    <v-list-item v-for="(task, index) in filtered" :key="'task-' + index" :to="'/task/' + task.id" :class="{ 'break-word': $vuetify.breakpoint.smAndDown }">
                      <template>
                        <v-list-item-action class="text-right">
                          <v-icon v-show="task.reccuring">mdi-refresh</v-icon>
                          <v-icon v-show="!task.reccuring && !task.completed">mdi-check-bold</v-icon>
                          <v-icon v-show="!task.reccuring && task.completed">mdi-check-bold</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                          <v-list-item-title class="blue--text">{{ task.name }}</v-list-item-title>
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

<script>

import tasks from '@/static/content/tasks'

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
  async mounted () {
    this.$set(this, 'tasks', tasks)
    this.$set(this, 'filtersBySkills', getFilters(tasks, 'skills'))
    this.$set(this, 'filtersByTopic', getFilters(tasks, 'tags'))
  },
  data () {
    return {
      tasks: [],
      filtersByTopic: [],
      filterTopic: [],
      showTopic: false,
      filtersBySkills: [],
      filterSkills: [],
      showSkills: true
    }
  },
  computed: {
    filtered () {
      let filtered = this.tasks
      let filtersByTopic = this.filterTopic.map(el => this.filtersByTopic[el])
      let filtersBySkills = this.filterSkills.map(el => this.filtersBySkills[el])
      if (filtersByTopic.length) filtered = filtered.filter(el => intersection(filtersByTopic, el.tags).length)
      if (filtersBySkills.length) filtered = filtered.filter(el => intersection(filtersBySkills, el.skills).length)
      return filtered
    }
  }
}
</script>