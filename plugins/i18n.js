import Vue from 'vue'
import Vuetify from 'vuetify'
import VueI18n from 'vue-i18n'

import messages from './translation'

Vue.use(Vuetify)
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'uk', // set locale
  messages, // set locale messages
})

export default new Vuetify({
  lang: {
    t: (key, ...params) => i18n.t(key, params)
  }
})

Vue.prototype._i18n = i18n
