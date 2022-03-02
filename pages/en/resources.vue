<template>
  <div>
  <v-row justify="center" align="center" class="pb-0">
    <v-col cols="12" sm="10" md="8">
      <v-card class="mx-auto ma-0" flat>
        <v-card-text class="text-h4 flex-grow-1 pb-0">
          <div class="fill-height d-flex">
            <v-icon class="mr-4">mdi-web</v-icon> Resources
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
  <v-row justify="center" align="center">
    <v-col cols="12" md="8">
      <v-card class="text-justify ma-0" flat>
        <v-card-text>
          <p>This is a list of useful resources. If you know other resources that aren’t on this list, <a href="https://docs.google.com/forms/d/e/1FAIpQLSfw4YnRoZAmXKS4My60gX0drV02RZXgqWSJGHBhkkh-fyrdjA/viewform?usp=pp_url&entry.600831188=An+information">please let us know</a> or <a href="https://github.com/Amice13/resistinua/issues">submit an issue</a>!</p>
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
                Filters
              </v-card-title>
              <v-card-text class="pa-4 pt-0">

                <!-- Location filter -->
                <div v-show="filtersByLocation.length" class="mt-6" @click="showLocation = !showLocation">
                  <strong>Filter by geography</strong>
                  <v-icon style="cursor: pointer; float: right;">{{ showLocation ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </div>
                <v-scroll-y-transition>
                  <v-list dense color="blue-grey lighten-4" class="w-100" v-show="showLocation">
                    <v-list-item-group v-model="filterLocation" multiple>
                      <v-list-item v-for="filter in filtersByLocation" :key="filter">
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

                <!-- Type filter -->
                <div v-show="filtersByType.length" class="mt-6" @click="showType = !showType">
                  <strong>Filter by type</strong>
                  <v-icon style="cursor: pointer; float: right;">{{ showType ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </div>
                <v-scroll-y-transition>
                  <v-list dense color="blue-grey lighten-4" class="w-100" v-show="showType">
                    <v-list-item-group v-model="filterType" multiple>
                      <v-list-item v-for="filter in filtersByType" :key="filter">
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
                  <strong>Filter by type of activity</strong>
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
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="8" class="pt-1">
            <v-card color="lighten-3" class="text-justify pa-0" flat>
              <v-card-text class="pa-0">
                <v-row v-if="filtered.length === 0">
                  <v-col cols="12" class="text-center">
                    Sorry, no resources match criteria
                  </v-col>
                </v-row>
                <v-row v-if="filtered.length">
                    <v-card max-width="100%" flat class="d-flex flex-column" v-for="(res, index) in filtered" :key="'res-' + index">
                      <v-card-title>
                        <a v-if="typeof res.link === 'string'" style="text-decoration: none;" :href="res.link" target="_blank">{{ res.name }}</a>
                        <a v-else style="text-decoration: none;" :href="res.link[0].url" target="_blank">{{ res.name }}</a>
                      </v-card-title>
                      <v-card-subtitle style="flex-grow: 1;" class="pb-2">
                        {{ res.description }}
                      </v-card-subtitle>
                      <v-card-actions v-if="typeof res.link === 'string'" class="pt-0">
                        <v-btn small :href="res.link" target="_blank" text color="blue darken-2">Перейти</v-btn>
                      </v-card-actions>
                      <v-card-actions v-else class="pt-0">
                        <v-btn small v-for="(link, index) in res.link" :href="link.url" :key="'link-' + index" target="_blank" class="mx-auto" color="blue darken-2" text>{{ link.title }}</v-btn>
                        <v-spacer />
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

import resources from '@/static/content/resources'

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
    this.$set(this, 'resources', resources)
    this.$set(this, 'filtersByType', getFilters(resources, 'type'))
    this.$set(this, 'filtersByTopic', getFilters(resources, 'tags'))
  },
  data () {
    return {
      resources: [],
      filtersByTopic: [],
      filterTopic: [],
      showTopic: false,
      filtersByLocation: ['Україна', 'Київ', 'Світ'],
      filterLocation: [],
      showLocation: true,
      filtersByType: [],
      filterType: [],
      showType: true
    }
  },
  computed: {
    filtered () {
      let filtersByTopic = this.filterTopic.map(el => this.filtersByTopic[el])
      let filtersByLocation = this.filterLocation.map(el => this.filtersByLocation[el])
      let filtersByType = this.filterType.map(el => this.filtersByType[el])
      let filtered = this.resources
      if (filtersByTopic.length) filtered = filtered.filter(el => intersection(filtersByTopic, el.tags).length)
      if (filtersByLocation.length) filtered = filtered.filter(el => intersection(filtersByLocation, el.location).length)
      if (filtersByType.length) filtered = filtered.filter(el => intersection(filtersByType, el.type).length)
      return filtered
    }
  }
}
</script>