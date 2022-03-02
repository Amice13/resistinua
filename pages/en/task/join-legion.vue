<template>
  <div>
  <v-row justify="center" align="center" class="mb-0">
    <v-col cols="12" sm="10" md="8" class="mb-0">
      <v-card class="mx-auto mb-0" flat>
        <v-card-text class="text-h4 flex-grow-1 mb-0 pb-0">
          <div class="fill-height d-flex">
            <v-icon class="mr-4">mdi-check-outline</v-icon> Join the Foreign Legion of Territorial Defense of Ukraine
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
**Step 1**. Apply to the Embassy of Ukraine in your country with the intention to join the Foreign Legion of Territorial Defense of Ukraine (ask a military diplomat or Consul, contact details - on the Embassy website):

There are three ways to apply:

1) come to the Embassy physically;
2) phone call;
3) write to email.  

**Step 2**. Specify what documents and clothing (equipment) you need or recommended to have. 

> **Documents**: internal document (ID or passport); passport to travel abroad; documents confirming military service (service in law enforcement agencies) and participation in the combat actions; other documents as requested by military diplomat or Consul.  

**Step 3**. Arrive at the Embassy with documents for an interview with the Defense Attaché and settlement of visa issues with the Consul. 

**Step 4**. Write an application for enlistment in the Territorial Defense of the Armed Forces of Ukraine for military service under a contract on a voluntary basis (the Defense Attaché assists).

**Step 5**. Get instructions on how to arrive in Ukraine and about the necessary documents and equipment. 

It is recommended, if available, to have military clothing or its elements, equipment, helmet, body armour, etc.

**Step 6**. Go to Ukraine in a defined way. 

> Representatives of Ukrainian Embassies, Consulates (abroad) and Territorial Defense in Ukraine will provide assistance on the way. Contacts will be provided at the Embassy of Ukraine in your country.

**Step 7**. Upon arrival in Ukraine at the collection point to join the Foreign Legion of Territorial Defense of Ukraine (sign the contract) and together with fighters from other countries and Ukrainian soldiers go to fight against the Russian occupiers. 

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
