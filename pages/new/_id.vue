<template>
  <div>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10" md="8">
      <v-card class="mx-auto" flat v-show="post.author">
        <v-card-text class="text-h4 flex-grow-1 justify-top">
          <div class="fill-height d-flex align-baseline">
            <v-icon class="mr-4">mdi-message-reply-outline</v-icon> {{ post.author }}
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
  <v-row justify="center" align="center" class="mt-0">
    <v-col cols="12" sm="10" md="8">
      <v-skeleton-loader v-show="!post.text" class="w-100" v-bind="attrs" type="article, actions"></v-skeleton-loader>
      <v-card v-show="post.text" class="mx-auto text-justify mw-100" flat>
        <v-card-text v-html="post.text">
        </v-card-text>
      </v-card>
      <v-card class="mx-auto mb-4 text-justify mw-100" flat>
        <v-card-text>
          <div v-show="post.date" class="mb-2 font-weight-bold">
            {{ new Date(post.date).toLocaleDateString('uk', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'}) }}
          </div>
        </v-card-text>
      </v-card>

    </v-col>
  </v-row>
  <v-row justify="center" align="center" class="mt-0">
    <v-col cols="12" sm="10" md="8">

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
import jsonp from 'jsonp'

import VueMarkdown from 'vue-markdown'
import messages from '@/static/content/messages'

export default {
  components: { VueMarkdown },
  async mounted () {
    let { id } = this.$route.params
    jsonp('https://api.resist.in.ua/post/' + id, {}, (err, data) => {
      if (err) {
        console.error(err.message)
      } else {
        this.$set(this, 'post', data[0])
      }
    })
  },
  data () {
    return {
      post: {}
    }
  },
  computed: {
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
.video {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
}
iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.white-sign i {
  color:  white !important;
}
</style>