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

* Офіс Президента України ([сайт](https://president.gov.ua/), [facebook](https://facebook.com/president.gov.ua), [twitter](https://twitter.com/APUkraine), [telegram](https://t.me/OP_UA))
* Верховна Рада України ([сайт](https://www.rada.gov.ua/), [facebook](https://www.facebook.com/verkhovna.rada.ukraine), [telegram](https://t.me/verkhovnaradaukrainy))
* Генеральний штаб Збройних сил України ([сайт](https://www.zsu.gov.ua/), [facebook](https://facebook.com/GeneralStaff.ua), [twitter](https://twitter.com/GeneralStaffUA))
* Кабінет Міністрів України ([facebook](https://facebook.com/KabminUA),[twitter](https://twitter.com/Kabmin_UA))
* Міністерство оборони України ([сайт](https://www.mil.gov.ua/), [facebook](https://facebook.com/MinistryofDefence.UA), [twitter](https://twitter.com/defenceu/))
* Міністерство внутрішніх справ ([facebook](https://facebook.com/mvs.gov.ua), [telegram](https://t.me/mvs_ukraine))
* Національна поліція України ([сайт](https://www.npu.gov.ua/), [facebook](https://facebook.com/UA.National.Police), [twitter](https://twitter.com/NPU_GOV_UA))
* Державна служба надзвичайних ситуацій (ДСНС) ([сайт](https://dsns.gov.ua/), [facebook](https://facebook.com/MNS.GOV.UA), [twitter](https://twitter.com/SESU_ua), [telegram](https://t.me/dsns_telegram))
* Державна прикордонна служба України ([сайт](https://dpsu.gov.ua/), [facebook](https://facebook.com/DPSUkraine))
* Центр стратегічних комунікацій та інформаційної безпеки ([сайт](https://spravdi.gov.ua/), [facebook](https://www.facebook.com/StratcomCentreUA), [twitter](https://twitter.com/stratcomcentre), [telegram](https://t.me/spravdi))
* Державна служба спеціального зв'язку та захисту інформації України ([сайт](https://cip.gov.ua/), [facebook](https://facebook.com/dsszzi), [twitter](https://twitter.com/dsszzi/), [telegram](https://t.me/dsszzi_official))
* Служба безпеки України ([facebook](https://facebook.com/SecurSerUkraine), [telegram](https://t.me/SBUkr))
* Сухопутні війська ЗС України ([facebook](https://facebook.com/UkrainianLandForces))
* Військово-морські сили ЗСУ ([facebook](https://facebook.com/navy.mil.gov.ua))
* Територіальна оборона ЗСУ ([facebook](https://facebook.com/TerritorialDefenseForces))

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
