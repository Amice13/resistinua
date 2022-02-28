<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10" md="8">

      <v-card class="mx-auto mb-4" flat>
        <v-card-text class="text-h4 flex-grow-1">
          <div class="fill-height d-flex flex-column justify-center text-center">Як чинити опір російській війні</div>
        </v-card-text>
      </v-card>

      <v-card class="mx-auto quote" color="#26c6da" dark>
        <v-img class="white--text d-flex" style="min-height: 250px; height: 250px;" src="/bkg/bullets3.jpg" gradient="to top right, rgba(0,0,0,.6), rgba(25,32,72,.8)">
          <v-card-title>
            <v-icon large left :small="$vuetify.breakpoint.smAndDown">mdi-format-quote-open</v-icon>
            <span class="font-weight-light" :class="{ 'text-h5': $vuetify.breakpoint.mdAndUp }" >Цитата дня</span>
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
          <p>Україна захищає себе і весь цивілізований світ від Російської Федерації!</p>
          <p>Ми захищаємо Україну!</p>
          <p>Захищати і захищатись може кожен: у містах, в евакуації, з-за кордону.</p>
        </v-card-text>
        <hr/>
        <v-card-text style="max-width: 400px; margin: auto;">
          <p>На порталі можна знайти корисні посилання і поради щодо того як:</p>
          <ul>
            <li>захистити себе і свою родину</li>
            <li>допомогти кібер-супротиву</li>
            <li>допомогти фінансово</li>
            <li>долучитись волонтером</li>
            <li>допомогти переселенцям</li>
            <li>долучитись до війська, ТрО та інше</li>
          </ul>
        </v-card-text>
        <v-card-text>
          <p class="text-h4 text-center">Супротив чинити може кожен на різних рівнях!</p>
          <v-btn ref="todestkop" v-show="showAddToDestkop" color="blue darken-3" dark @click="addToDesktop">Додати на робочий стіл</v-btn>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>

import VueMarkdown from 'vue-markdown'
import quotes from '@/static/content/quotes'

export default {
  async mounted () {
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