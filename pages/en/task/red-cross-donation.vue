<template>
  <div>
  <v-row justify="center" align="center" class="mb-0">
    <v-col cols="12" sm="10" md="8" class="mb-0">
      <v-card class="mx-auto mb-0" flat>
        <v-card-text class="text-h4 flex-grow-1 mb-0 pb-0">
          <div class="fill-height d-flex">
            <v-icon class="mr-4">mdi-check-outline</v-icon> Make a donation to the Red Cross
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
The Ministry of Healthcare of Ukraine and the Ukrainian Red Cross Society have opened a special account to help healthcare institutions.

You can donate to this account today.

## In UAH:

* 01024, м. Київ, вул. Пушкінська, 30
* р/р UA613510050000026003879001526 в АТ «Укрсиббанк»
* МФО 351005
* Код ЄДРПОУ 00016797
* Призначення: на медицину

## In USD:

* Legal entity: URCS
* Enterprise code: 00016797
* Currency of account: USD
* Account number IBAN: UA983510050000026004271658800
* Bank name: JOINT STOCK COMPANY «UKRBSIBBANK»
* Beneficiary bank (JSC «UKRBSIBBANK»): 020061151200138 UKRBSIBBANK
* ANDRIIVSKA STREET 2/21. KYIV, UKRAINE
* SWIFT code: KHABUA2K
* Intermediary bank: BNP PARIBAS U.S.A. -New York Branch
* New York, USA
* SWIFT- код: BNPAUS3N

## IN Eur: 

* Legal entity: URCS
* Enterprise code:  00016797
* Currency of account: EUR
* Account number IBAN: UA983510050000026004271658800
* Bank name: JOINT STOCK COMPANY “UKRBSIBBANK”
* Beneficiary bank (JSC “UKRBSIBBANK”): 07205696
* UKRBSIBBANK
* ANDRIIVSKA STREET 2/21, KYIV, UKRAINE
* SWIFT code: KHABUA2K
* Intermediary bank: BNP PARIBAS SA 
* Paris, FRANC
* SWIFT- код: BNPAFRPP

## In CHF:

* Legal entity: URCS
* Enterprise code: 00016797
* Currency of account: CHF
* Account number IBAN: UA983510050000026004271658800
B* ank name: JOINT STOCK COMPANY “UKRBSIBBANK”
* Beneficiary bank (JSC “UKRBSIBBANK”): 256446/1A
* UKRBSIBBANK
* ANDRIIVSKA STREET 2/21, KYIV, UKRAINE
* SWIFT code: KHABUA2K
* Intermediary bank: BNP PARIBAS (SUISSE) SA
* Geneva, SWITZERLAND
* SWIFT- код: BPPBCHGG

## In GBP:

* Legal entity: URCS
* Enterprise code: 00016797
* Currency of account: GBP
* Account number IBAN: UA903510050000026008879082023
* Bank name: JOINT STOCK COMPANY “UKRBSIBBANK”
* Beneficiary bank (JSC “UKRBSIBBANK”): 10947113
* UKRBSIBBANK
* ANDRIIVSKA STREET 2/21, KYIV, UKRAINE
* SWIFT code: KHABUA2K
* Intermediary bank: CITIBANK NA
* London, GREAT BRITAIN
* SWIFT- код: CITIGB2L

[Source](https://moz.gov.ua/article/news/moz-ta-chervonij-hrest-vidkrivajut-rahunok-dlja-dopomogi-medikam)

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