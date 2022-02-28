<template>
  <v-app dark>
    <v-fade-transition mode="out-in">
      <div class="loading" v-show="loading">
        <div class="text-center d-flex align-center justify-center fill-height">
          <v-progress-circular
            :size="50"
            color="primary"
            indeterminate
          ></v-progress-circular>
        </div>
      </div>
    </v-fade-transition>

    <v-navigation-drawer v-model="drawer" disable-resize-watcher fixed app dark>
      <v-list>
        <v-list-item v-for="{ title, icon, to } in menu" :key="'drawer-' + title" :to="to" router exact>
          <v-list-item-action>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="$t(title)" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app
      fixed color="light-blue darken-4" dark
      :shrink-on-scroll="shrink && $vuetify.breakpoint.mdAndUp"
      :prominent="shrink && $vuetify.breakpoint.mdAndUp"
      src="/ua.jpg">
      <template v-slot:img="{ props }">
        <v-img v-bind="props" gradient="to top, rgba(0,0,50,0.6), rgba(0,0,0,.2)"></v-img>
      </template>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" v-if="$vuetify.breakpoint.smAndDown"></v-app-bar-nav-icon>
      <v-app-bar-title class="mb-1" :class="{ 'ml-6': $vuetify.breakpoint.mdAndUp, 'pl-0': $vuetify.breakpoint.smAndDown }">
        <div style="position: relative;">
          <v-icon class="ua-header" left color="amber">ua-ua</v-icon>{{ $t(title) }}
        </div>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <!-- <v-btn @click="$i18n.locale = $i18n.locale === 'uk' ? 'en' : 'uk'" text color="white">{{ $i18n.locale }}</v-btn> -->
      <!--
      <v-btn icon><v-icon>mdi-magnify</v-icon></v-btn>
      <v-btn icon><v-icon>mdi-heart</v-icon></v-btn>
      <v-btn icon><v-icon>mdi-dots-vertical</v-icon></v-btn>
      -->
      <template v-if="$vuetify.breakpoint.mdAndUp" v-slot:extension>
        <v-tabs grow class="main-menu">
          <v-tabs-slider color="yellow darken-2"></v-tabs-slider>
          <v-tab v-for="({ to, title }, i) in menu" :to="to" :key="'main-menu-' + i">
            <span v-if="to === '/'"><v-icon>mdi-home</v-icon></span>
            <span v-else>{{ $t(title) }}</span>
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-main>
      <v-container fluid style="height: calc(100% + 24px);">
        <v-fade-transition mode="out-in">
          <Nuxt />
        </v-fade-transition>
      </v-container>
    </v-main>
    <v-footer dark padless>
      <v-card flat tile class="light-blue darken-4 white--text text-center w-100">
        <v-card-text>
          <div class="text-h6 mb-2">Поділитися</div>
          <v-btn :href="share.url" target="_blank" v-for="share in shares" :key="share.icon" class="mx-4 white--text" icon>
            <v-icon size="24px">
              {{ share.icon }}
            </v-icon>
          </v-btn>
          <v-row justify="center" no-gutters>
            <v-btn v-for="{ title, to } in menu" :key="title" :to="to" color="white" text rounded class="my-2">
              {{ $t(title) }}
            </v-btn>
          </v-row>

        </v-card-text>
        <v-divider></v-divider>
        <v-card-text class="white--text">
          © <strong>{{ $t('Український спротив') }}</strong>, {{ new Date().getFullYear() }}
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  mounted () {
    this.shrink = this.$route.path === '/'
    this.drawer = false
    this.loading = false
  },
  data () {
    return {
      loading: true,
      drawer: false,
      model: 0,
      shrink: true,
      miniVariant: false,
      shares: [
        {
          icon: 'mdi-facebook',
          url: 'https://www.facebook.com/sharer/sharer.php?u=https://resist.in.ua'
        },
        {
          icon: 'mdi-twitter',
          url: 'https://twitter.com/intent/tweet?url=https://resist.in.ua&text=Інтернет-портал спротиву військовим діям проти України'
        },
        {
          icon: 'mdi-linkedin',
          url: 'https://www.linkedin.com/shareArticle?mini=true&url=https://resist.in.ua'
        },
        {
          icon: 'mdi-mail',
          url: 'mailto:info@example.com?&subject=&cc=&bcc=&body=https://resist.in.ua'
        }
      ],
      menu: [
        {
          icon: 'mdi-home-outline',
          title: 'Головна',
          to: '/'
        },
        {
          icon: 'mdi-check-outline',
          title: 'Завдання',
          to: '/tasks'
        },
        {
          icon: 'mdi-message-reply-outline',
          title: 'Офіційні звернення',
          to: '/messages'
        },
        /*
        {
          icon: 'mdi-calendar-blank-outline',
          title: 'Події',
          to: '/events'
        },
        /*
        {
          icon: 'mdi-earth',
          title: 'Світ',
          to: '/world'
        },
        */
        {
          icon: 'mdi-hand-front-right-outline',
          title: 'Допомога',
          to: '/volounteer'
        },
        {
          icon: 'mdi-web',
          title: 'Ресурси',
          to: '/resources'
        }
      ],
      title: 'Український спротив'
    }
  },
  watch: {
    '$route' (to, from) {
      this.$vuetify.goTo('#app', { offset: 0 })
      this.shrink = to.path === '/'
    }
  }
}
</script>

<style>
.v-app-bar-title__content {
  min-width: 260px;
}
.w-100 {
  width: 100%;
}

a[href$='@gentls.com'],
a[href$='#btn-center'] {
  padding: 0 8px;
  height: 36px;
  min-width: 64px;
  padding: 0 16px;
  background: #01579b !important;
  background-color: #01579b !important;
  color: #fff !important;
  caret-color: #fff !important;
  margin: auto !important;
  text-align: center;
  align-items: center;
  border-radius: 4px;
  display: inline-flex;
  flex: 0 0 auto;
  font-weight: 500;
  letter-spacing: 0.0892857143em;
  justify-content: center;
  outline: 0;
  position: relative;
  text-decoration: none;
  text-indent: 0.0892857143em;
  text-transform: uppercase;
  transition-duration: 0.28s;
  transition-property: box-shadow, transform, opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
}

.v-card__text ul, .v-card__text ol, .v-card__text h2, .v-card__text h3 {
  margin-bottom: 32px;
}

.v-card__title {
  word-break: break-word !important;
  text-align: left !important;
}

.x-small {
  font-size: 80%;
}

.break-word {
  overflow: inherit !important;
  white-space: inherit !important;
  text-align: left !important;
}



</style>