<template>
  <div>
  <v-row justify="center" align="center" class="pb-0">
    <v-col cols="12" sm="10" md="8">
      <v-card class="mx-auto ma-0" flat>
        <v-card-text class="text-h4 flex-grow-1 pb-0">
          <div class="fill-height d-flex">
            <v-icon class="mr-4">mdi-hand-front-right-outline</v-icon> Help
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
  <v-row justify="center" align="center">
    <v-col cols="12" md="8">
      <v-card class="text-justify ma-0" flat>
        <v-card-text>
          <p>
            Help Ukraine to resist Russian invasion. Make a donation to a one of verified funds or <a href="https://bank.gov.ua/en/news/all/natsionalniy-bank-vidkriv-spetsrahunok-dlya-zboru-koshtiv-na-potrebi-armiyi">support Armed Forces of Ukraine</a>.
            If you want to submit another organization <a href="https://docs.google.com/forms/d/e/1FAIpQLSfw4YnRoZAmXKS4My60gX0drV02RZXgqWSJGHBhkkh-fyrdjA/viewform?usp=pp_url&entry.600831188=A+charity+organization">please let us know</a> or <a href="https://github.com/Amice13/resistinua/issues">submit an issue</a>
          </p>
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
                <!-- Topic filter -->
                <div class="mt-6">
                  <strong>Filter by type of activity</strong>
                </div>
                <v-scroll-y-transition>
                  <v-list dense color="blue-grey lighten-4" class="w-100">
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
              <v-card-text :class="{ 'pa-0': $vuetify.breakpoint.mdAndUp }">
                <v-row v-if="filtered.length === 0">
                  <v-col cols="12" class="text-center">
                    Sorry, no organizations match criteria
                  </v-col>
                </v-row>
                <v-row v-if="filtered.length">
                    <v-card
                      :class="{ 'w-50': $vuetify.breakpoint.mdAndUp, 'w-100': $vuetify.breakpoint.smAndDown }"
                      class="d-flex flex-column mb-4" v-for="(org, index) in filtered"
                      :key="'org-' + index"
                    >
                      <v-img height="200px" class="d-flex align-center justify-center flex-grow-0">
                        <v-img class="mx-auto" max-width="160px" max-height="120px" contain :src="org.logo" />
                      </v-img>
                      <v-card-title>
                        <a style="text-decoration: none;" :href="org.link" target="_blank">{{ org.name }}</a>
                      </v-card-title>
                      <v-card-subtitle style="flex-grow: 1;">
                        {{ org.description }}
                      </v-card-subtitle>
                      <v-card-actions class="blue darken-3">
                        <v-btn :href="org.donateLink" target="_blank" class="mx-auto" block color="yellow lighten-2" text>Donate</v-btn>
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

import organizations from '@/static/content/organizations-en'

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
    this.$set(this, 'organizations', organizations)
    this.$set(this, 'filtersByTopic', getFilters(organizations, 'tags'))
  },
  data () {
    return {
      organizations: [],
      filtersByTopic: [],
      filterTopic: []
    }
  },
  computed: {
    filtered () {
      let filtersByTopic = this.filterTopic.map(el => this.filtersByTopic[el])
      let filtered = this.organizations
      if (filtersByTopic.length) filtered = filtered.filter(el => intersection(filtersByTopic, el.tags).length)
      return filtered
    }
  }
}
</script>

<style>
.w-50 {
  max-width: 48%;
  margin: 1%;
}
</style>
