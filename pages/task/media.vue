<template>
  <div>
  <v-row justify="center" align="center" class="mb-0">
    <v-col cols="12" sm="10" md="8" class="mb-0">
      <v-card class="mx-auto mb-0" flat>
        <v-card-text class="text-h4 flex-grow-1 mb-0 pb-0">
          <div class="fill-height d-flex">
            <v-icon class="mr-4">mdi-check-outline</v-icon> Забезпечити себе джерелом достовірної інформації
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
Під час військових дій важливо уникати дезінформації. Для отримання достовірної, вчасної та точної інформації, підпишіться на наведені джерела.

## ОФІЦІЙНІ ДЖЕРЕЛА 

* [Офіс Президента України](https://www.facebook.com/president.gov.ua)
* [Генеральний штаб Збройних сил України](https://www.facebook.com/GeneralStaff.ua)
* [Кабінет Міністрів України](https://www.facebook.com/KabminUA)
* [Міністерство оборони України](https://www.facebook.com/MinistryofDefence.UA)
* [Міністерство внутрішніх справ](https://www.facebook.com/mvs.gov.ua)
* [Національна поліція України](https://www.facebook.com/UA.National.Police)
* [Державна служба надзвичайних ситуацій (ДСНС)](https://www.facebook.com/MNS.GOV.UA)
* [Державна прикордонна служба України](https://www.facebook.com/DPSUkraine)
* [Центр стратегічних комунікацій та інформаційної безпеки](https://www.facebook.com/StratcomCentreUA)
* [Державна служба спеціального зв'язку та захисту інформації України](https://www.facebook.com/dsszzi)
* [Сухопутні війська ЗС України](https://www.facebook.com/UkrainianLandForces)
* [Військово-морські сили ЗСУ](https://www.facebook.com/navy.mil.gov.ua)
* [Територіальна оборона ЗСУ](https://www.facebook.com/TerritorialDefenseForces)

## МЕДІА 

**Свідомі медіа:**

* https://t.me/svidomi_ua
* https://www.instagram.com/svidomi_ua/
* https://www.instagram.com/svidomi_ua_reserv/
* https://www.facebook.com/svidomi.news 

**Громадське**:

* https://t.me/hromadske_ua 
* https://www.instagram.com/hromadske.ua/ 
* https://www.facebook.com/hromadskeua

**Новини Здорової Людини NZL**

* https://www.instagram.com/nzl.media/ 
* https://www.facebook.com/nzl.media
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