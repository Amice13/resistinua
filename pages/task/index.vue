<template>
  <div>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10" md="8">
      <v-card class="mx-auto mb-4" flat>
        <v-card-text class="text-h4 flex-grow-1">
          <div class="fill-height d-flex">
            <v-icon class="mr-4">mdi-check-outline</v-icon> Завдання
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
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non odio euismod lacinia at quis risus sed vulputate. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Elit pellentesque habitant morbi tristique senectus et netus et malesuada. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et netus. Viverra accumsan in nisl nisi scelerisque. Pellentesque id nibh tortor id aliquet lectus proin. Pharetra et ultrices neque ornare aenean euismod elementum. Quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Quis auctor elit sed vulputate mi sit amet mauris commodo. Sit amet mauris commodo quis imperdiet. Nunc lobortis mattis aliquam faucibus purus. Integer malesuada nunc vel risus commodo. Ultrices neque ornare aenean euismod elementum nisi quis eleifend. Quis viverra nibh cras pulvinar mattis. Massa tempor nec feugiat nisl pretium fusce id velit ut. Iaculis eu non diam phasellus vestibulum. Scelerisque eu ultrices vitae auctor eu augue ut lectus.

* sit. Nulla aliquet porttitor
* euismod elementum. Quam lacus suspendisse faucibus


Elit sed vulputate mi sit amet mauris. Aliquet porttitor lacus luctus accumsan tortor posuere ac. Porta non pulvinar neque laoreet. Sed lectus vestibulum mattis ullamcorper velit. Aliquam eleifend mi in nulla posuere. Mauris ultrices eros in cursus turpis massa tincidunt. Turpis in eu mi bibendum. Urna nec tincidunt praesent semper feugiat. Enim blandit volutpat maecenas volutpat. Cum sociis natoque penatibus et. In ante metus dictum at tempor commodo. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Nulla at volutpat diam ut venenatis tellus. Lacinia at quis risus sed vulputate odio ut. Condimentum mattis pellentesque id nibh tortor id aliquet lectus proin. Commodo nulla facilisi nullam vehicula ipsum a. Aliquet bibendum enim facilisis gravida neque convallis. Urna id volutpat lacus laoreet non. Vitae suscipit tellus mauris a diam maecenas sed enim.

![This is an image](https://myoctocat.com/assets/images/base-octocat.svg)

![This is an image](https://myoctocat.com/assets/images/base-octocat.svg#w-100)

Vitae tortor condimentum lacinia quis vel eros donec ac odio. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Odio morbi quis commodo odio. Dignissim sodales ut eu sem integer vitae justo eget. Viverra mauris in aliquam sem fringilla ut morbi tincidunt. Ut pharetra sit amet aliquam id diam maecenas ultricies. Interdum velit laoreet id donec ultrices tincidunt. Amet est placerat in egestas erat imperdiet. Sit amet mattis vulputate enim. Diam donec adipiscing tristique risus nec feugiat in fermentum. A lacus vestibulum sed arcu. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Urna nunc id cursus metus.

Dolor purus non enim praesent elementum. Velit dignissim sodales ut eu sem integer. Mauris ultrices eros in cursus turpis massa tincidunt dui ut. Posuere lorem ipsum dolor sit. Nulla pharetra diam sit amet. Lacus suspendisse faucibus interdum posuere lorem ipsum. Dignissim convallis aenean et tortor at risus viverra adipiscing. Lectus proin nibh nisl condimentum id venenatis a. Et malesuada fames ac turpis egestas. Ut venenatis tellus in metus. Elementum curabitur vitae nunc sed velit. Ac placerat vestibulum lectus mauris ultrices eros. Tortor posuere ac ut consequat semper viverra nam libero. Sollicitudin ac orci phasellus egestas tellus. Sit amet risus nullam eget felis eget nunc. Ipsum dolor sit amet consectetur. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis.

Sed id semper risus in hendrerit gravida rutrum quisque non. At consectetur lorem donec massa sapien faucibus. Dolor sit amet consectetur adipiscing elit duis tristique. Sollicitudin tempor id eu nisl nunc mi ipsum. Vestibulum sed arcu non odio euismod lacinia at quis risus. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. Mattis nunc sed blandit libero volutpat. Ut sem viverra aliquet eget sit amet tellus cras. Magna sit amet purus gravida quis blandit turpis. Amet nulla facilisi morbi tempus.
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