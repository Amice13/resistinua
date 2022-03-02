<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10" md="8">

      <v-card class="mx-auto mb-4" flat>
        <v-card-text class="text-h4 flex-grow-1">
          <div class="fill-height d-flex flex-column justify-center text-center">How to resist the Russian war</div>
        </v-card-text>
      </v-card>

      <v-card class="mx-auto quote" color="#26c6da" dark>
        <v-img class="white--text d-flex" style="min-height: 250px; height: 250px;" src="/bkg/bullets3.jpg" gradient="to top right, rgba(0,0,0,.6), rgba(25,32,72,.8)">
          <v-card-title>
            <v-icon large left :small="$vuetify.breakpoint.smAndDown">mdi-format-quote-open</v-icon>
            <span class="font-weight-light" :class="{ 'text-h5': $vuetify.breakpoint.mdAndUp }" >Quote of the day</span>
          </v-card-title>
          <v-card-text class="text-h4 font-weight-bold flex-grow-1" :class="{ 'text-h4': $vuetify.breakpoint.mdAndUp, 'text-h6': $vuetify.breakpoint.smAndDown, 'lh-15': $vuetify.breakpoint.smAndDown }">
            <div class="fill-height d-flex flex-column justify-center text-center">{{ randomQuote }}</div>
          </v-card-text>
          <v-card-title>
          </v-card-title>
        </v-img>
      </v-card>


      <v-card class="logo py-4 d-flex justify-center">
      </v-card>
      <v-card flat>
        <v-card-text class="text-center text-h6">
          <p>Ukraine is defending itself and the whole civilized world against the Russian Federation!</p>
          <p>We are defending Ukraine!</p>
          <p>Everyone can defend others and themselves: in cities, in evacuation, from abroad.</p>
        </v-card-text>
        <hr/>
        <v-card-text style="max-width: 400px; margin: auto;">
          <p>On the portal, you can find useful links and advice on how to:</p>
          <ul>
            <li>defend yourself and your family</li>
            <li>help cyber resistance</li>
            <li>help financially</li>
            <li>join as a volunteer</li>
            <li>help the internally displaced</li>
            <li>join the Army, Territorial defense, etc.</li>
          </ul>
          <v-btn dark to="/tasks" class="mb-4" block color="blue darken-1">Participate</v-btn>
          <v-btn dark to="/volounteer" block color="blue darken-3">Donate</v-btn>
        </v-card-text>
        <v-card-text>
          <p class="text-h4 text-center">Everyone can resist on different levels!</p>
          <v-btn ref="todestkop" v-show="showAddToDestkop" color="blue darken-3" dark @click="addToDesktop">Add to Home Screen</v-btn>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>

import VueMarkdown from 'vue-markdown'
import quotes from '@/static/content/quotes-en'

export default {
  async mounted () {
    console.log(this)
    this.$set(this, 'randomQuote', quotes[Math.floor(Math.random()*quotes.length)])
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt = e;
      this.showAddToDestkop = true
      if (!this.$vuetify.breakpoint.smAndDown) this.showAddToDestkop = false
      this.$refs.todestkop.addEventListener('click', (e) => {
        // Show the prompt
        deferredPrompt.prompt()
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
              console.log('User accepted the A2HS prompt')
            } else {
              console.log('User dismissed the A2HS prompt')
            }
            deferredPrompt = null
          })
      })
    })
  },
  data () {
    return {
      randomQuote: '',
      showAddToDestkop: false
    }
  },
  methods: {
    addToDesktop () {

    }
  },
  beforeDestroy () {
    window.removeEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt = e;
      this.showAddToDestkop = true
      if (!this.$vuetify.breakpoint.smAndDown) this.showAddToDestkop = false
      this.$refs.todestkop.addEventListener('click', (e) => {
        // Show the prompt
        deferredPrompt.prompt()
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
              console.log('User accepted the A2HS prompt')
            } else {
              console.log('User dismissed the A2HS prompt')
            }
            deferredPrompt = null
          })
      })
    })
  },
}
</script>

<style>
.quote .v-responsive__content {
  display: flex;
  flex-direction: column;
}
.lh-15 {
  line-height: 1.5rem !important;
}
</style>