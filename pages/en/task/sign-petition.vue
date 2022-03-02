<template>
  <div>
  <v-row justify="center" align="center" class="mb-0">
    <v-col cols="12" sm="10" md="8" class="mb-0">
      <v-card class="mx-auto mb-0" flat>
        <v-card-text class="text-h4 flex-grow-1 mb-0 pb-0">
          <div class="fill-height d-flex">
            <v-icon class="mr-4">mdi-check-outline</v-icon> Sign the petition to support Ukraine
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

Now a lot of petitions against the Russian Federation initiated by the government, media, and non-government organizations are being spread in social media. They may ask you to sign a request to add new sanctions, send more help to Ukraine, etc. while stressing that every vote matters. But be cautious as the enemy may try to get hold of your personal data through this important tool, for example, by creating fake petition pages which are very similar to the real ones. For instance, the enemy can use your personal data for phishing or sending propaganda. To ensure your data don’t get into the enemy’s hands, be careful to check the following:

* **SOURCE**. Don’t follow links posted on suspicious Telegram channels, received via email from unknown addresses or sent by strangers on social media/in messengers; don’t download suspicious files. Trust only the official sources.
* **RESOURCE**. Always pay attention to the resource where a petition is placed. Don’t follow suspicious links. Beware of websites from suspicious domains (non-EU). Trust only verified websites, such as avaaz.org.
* **SPELLING**. Also pay attention to how the address of the website is spelt: the enemy may create a copy of the real/verified resource and change the spelling (for example, by changing just a couple of letters). When such websites load, malicious code may start running automatically on your device, and the enemy will get access to the information on your devices.
* **PERSONAL DATA**. Don’t fill in forms/petitions/appeals that require entering your personal data or your relatives’ personal data, for example, dates of birth, mobile phone numbers, or home addresses. In most cases, specifying the country or the city you live in should be enough.
* **SUSPICIOUS CONTENT**. Analyze the content of petitions. Be suspicious of texts that contain too many patriotic appeals or vice versa – those that sound panicky. Take into account how realistic the text is. For many, the petition to “close the airspace” by NATO forces may not look very realistic. As a rule, such decisions aren’t made under the pressure of petitions.
* **DUPLICATES**. Make sure that a petition is not a fake duplicate of the original one. Think if you have seen the same text before, and look for excerpts on the internet.
* **LANGUAGE**. Pay attention to the language of the petition and how grammatical the text is, whether there is translation into foreign languages, etc. A trustworthy petition may be translated into several foreign languages and shouldn’t contain errors that are typical of machine translation. Be careful and sign only those petitions that you are sure of. Then your vote will really be able to help.

A petition to the NATO member states and Ukraine-friendly countries to close the airspace of Ukraine and deploy peacemaking troops in Ukraine, provide Kyiv with military help, and support the Ukrainian people has been created. You can sign this petition too.

[Sign the petition](https://www.openpetition.eu/petition/online/people-around-the-world-ask-nato-to-close-the-airspace-over-ukraine#btn-center)
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