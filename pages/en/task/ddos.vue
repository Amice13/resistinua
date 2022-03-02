<template>
  <div>
  <v-row justify="center" align="center" class="mb-0">
    <v-col cols="12" sm="10" md="8" class="mb-0">
      <v-card class="mx-auto mb-0" flat>
        <v-card-text class="text-h4 flex-grow-1 mb-0 pb-0">
          <div class="fill-height d-flex">
            <v-icon class="mr-4">mdi-check-outline</v-icon> Take part in a DDOS attack
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10" md="8">
      <v-card class="mx-auto mb-4 text-justify mw-100" flat>
        <v-card-text>
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
You can join a DDOS-attack to bring down Russian websites.

Install one of these VPN-services in your browser:

* [Touch VPN - Secure and unlimited VPN proxy](https://chrome.google.com/webstore/detail/touch-vpn-secure-and-unli/bihmplhobchoageeokmgbdihknkjbknd)
* [Hotspot Shield Free VPN Proxy - Unlimited VPN](https://chrome.google.com/webstore/detail/hotspot-shield-free-vpn-p/nlbejmccbhkncgokjcmghpfloaajcffj)

You may also need to install [CORS]():

* [CORS Unblock](https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino)

https://help-ukraine-win.s3.eu-west-1.amazonaws.com/index.html

**Important:** installing VPN is crucial!

After you install the VPN in your browser, turn it on and use the links provided by Ukrainian cyber army: 

* https://help-ukraine-win.s3.eu-west-1.amazonaws.com/index.html
* https://stop-russian-desinformation.near.page/
* https://cyber-yozh.com/
* https://russianwarshipgofuckyourself.club/

[Join IT army](https://t.me/itarmyofukraine2022#btn-center)

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
.mw-100 * {
  max-width: 100%;
}
</style>