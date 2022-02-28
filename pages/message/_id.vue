<template>
  <div>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10" md="8">
      <v-card class="mx-auto" flat>
        <v-card-text class="text-h4 flex-grow-1 justify-top">
          <div class="fill-height d-flex align-baseline">
            <v-icon class="mr-4">mdi-message-reply-outline</v-icon> {{ name }}
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
  <v-row justify="center" align="center" class="mt-0">
    <v-col cols="12" sm="10" md="8">
      <v-card class="mx-auto" flat>
        <v-card-text class="text-h4 flex-grow-1 justify-top">
        <div class="video">
          <iframe :src="'https://www.youtube.com/embed/' + id" :title="name" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        </v-card-text>
      </v-card>
      <v-card class="mx-auto text-justify mw-100" flat>
        <v-card-text>
          <v-btn-toggle>
            <v-btn class="white-sign" :href="`https://www.facebook.com/sharer/sharer.php?u=${url}`" target="_blank" rounded color="#3b5998" dark><v-icon>mdi-facebook</v-icon></v-btn>
            <v-btn class="white-sign" :href="`https://twitter.com/intent/tweet?url=${url}&text=${text}`" target="_blank" rounded color="#1DA1F2" dark><v-icon>mdi-twitter</v-icon></v-btn>
            <v-btn class="white-sign" :href="`https://pinterest.com/pin/create/button/?url=${url}&media=&description=${text}`" target="_blank" rounded color="#0e76a8" dark><v-icon>mdi-linkedin</v-icon></v-btn>
            <v-btn class="white-sign" :href="`https://www.linkedin.com/shareArticle?mini=true&url=${url}`" target="_blank" rounded color="#c8232c" dark><v-icon>mdi-pinterest</v-icon></v-btn>
            <v-btn class="white-sign" :href="`mailto:info@example.com?&subject=&cc=&bcc=&body=${url}<br/><br/>${text}`" rounded color="yellow darken-3" dark><v-icon>mdi-email</v-icon></v-btn>
          </v-btn-toggle>
        </v-card-text>
      </v-card>
      <v-card class="mx-auto mb-4 text-justify mw-100" flat>
        <v-card-text>
          <div class="mb-2 font-weight-bold">
            {{ new Date(date).toLocaleDateString('uk', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'}) }}
          </div>
          <vue-markdown :key="videokey">{{ text }}</vue-markdown>
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

import VueMarkdown from 'vue-markdown'
import messages from '@/static/content/messages'

export default {
  components: { VueMarkdown },
  async mounted () {
    let { id } = this.$route.params
    console.log(id)
    if (!id) return this.$nuxt.error({ statusCode: 404, message: 'Сторінку не знайдено!' })
    let metadata = messages.find(el => el.id === id)
    if (!metadata) return this.$nuxt.error({ statusCode: 404, message: 'Сторінку не знайдено!' })
    for (let [key, value] of Object.entries(metadata)) {
      this.$set(this, key, value)
    }
    console.log(metadata)
    this.videokey++
  },
  data () {
    return {
      id: '',
      name: '',
      date: '',
      text: '',
      translated: false,
      russianTimestamp: '',
      speaker: [],
      url: '',
      description: '',
      videokey: 0
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