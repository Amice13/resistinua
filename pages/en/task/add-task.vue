<template>
  <div>
  <v-row justify="center" align="center" class="mb-0">
    <v-col cols="12" sm="10" md="8" class="mb-0">
      <v-card class="mx-auto mb-0" flat>
        <v-card-text class="text-h4 flex-grow-1 mb-0 pb-0">
          <div class="fill-height d-flex">
            <v-icon class="mr-4">mdi-check-outline</v-icon> Add a task or information
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

You can add a task or information to this website by creating a pull request in the following repository: [ResistInUa](https://github.com/Amice13/resistinua) or by creating an [issue for the developer](https://docs.google.com/forms/d/e/1FAIpQLSfw4YnRoZAmXKS4My60gX0drV02RZXgqWSJGHBhkkh-fyrdjA/viewform?usp=pp_url&entry.600831188=A+task).

[Add a task](https://docs.google.com/forms/d/e/1FAIpQLSfw4YnRoZAmXKS4My60gX0drV02RZXgqWSJGHBhkkh-fyrdjA/viewform?usp=pp_url&entry.600831188=A+task)
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