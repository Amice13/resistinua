import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  server: {
    port: 80
  },

  // Build directory
  buildDir: 'dst',

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  router: {
    mode: 'hash'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Український спротив',
    title: 'Український спротив',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'Як чинити опір російській війні' },
      { property: 'og:url', content: 'http://resist.in.ua' },
      { property: 'og:image', content: 'http://resist.in.ua/ua-resized.jpg' },
      { property: 'og:type', content: 'website' },
      { property: 'og:description', content: 'Як чинити опір російській війні' },
      { property: 'og:locale', content: 'uk_UA' },
      { property: 'og:site_name', content: 'Український спротив' },
      { property: 'twitter:card', content: 'summary' },
      { property: 'twitter:title', content: 'Український спротив' },
      { property: 'twitter:description”', content: 'Як чинити опір російській війні' },
      { property: 'twitter:url', content: 'http://resist.in.ua' },
      { property: 'twitter:image', content: 'http://resist.in.ua/ua-resized.jpg' },
      { hid: 'description', name: 'description', content: 'Як чинити опір російській війні' },
      { name: 'format-detection', content: 'telephone=no' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/i18n' },
    '~/plugins/gtag'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/proxy'
  ],

  proxy: {
    '/news/': { target: 'http://165.22.76.33/', pathRewrite: {'^/news/': ''}, changeOrigin: true }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: 'Український спротив',
      short_name: 'Український спротив',
      description: 'Як чинити опір російській війні',
      icons: '',
      display: '',
      icon: {
        source: '/static/android-chrome-512x512.png',
        sizes: []
      },
      lang: 'uk',
      useWebmanifestExtension: true
    }
  },

  generate: {
    dir: 'docs'
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend (config, { isDev, isClient }) {
      config.node = {
        fs: 'empty',
        request: 'empty',
        net: 'empty'
      }
      if (!isDev) {
        // relative links, please.
        config.output.publicPath = './_nuxt/'
      }
      return config
    }
  }
}
