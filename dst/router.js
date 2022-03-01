import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5c443e94 = () => interopDefault(import('..\\pages\\en\\index.vue' /* webpackChunkName: "pages/en/index" */))
const _3af2dd2f = () => interopDefault(import('..\\pages\\messages.vue' /* webpackChunkName: "pages/messages" */))
const _ee59df5c = () => interopDefault(import('..\\pages\\resources.vue' /* webpackChunkName: "pages/resources" */))
const _ebfab5cc = () => interopDefault(import('..\\pages\\task\\index.vue' /* webpackChunkName: "pages/task/index" */))
const _30ab788a = () => interopDefault(import('..\\pages\\tasks.vue' /* webpackChunkName: "pages/tasks" */))
const _963668d4 = () => interopDefault(import('..\\pages\\volounteer.vue' /* webpackChunkName: "pages/volounteer" */))
const _1ec341bf = () => interopDefault(import('..\\pages\\world.vue' /* webpackChunkName: "pages/world" */))
const _0ec33c18 = () => interopDefault(import('..\\pages\\en\\messages.vue' /* webpackChunkName: "pages/en/messages" */))
const _2f0e8e89 = () => interopDefault(import('..\\pages\\en\\resources.vue' /* webpackChunkName: "pages/en/resources" */))
const _0dd37572 = () => interopDefault(import('..\\pages\\en\\tasks.vue' /* webpackChunkName: "pages/en/tasks" */))
const _53cdd782 = () => interopDefault(import('..\\pages\\en\\volounteer.vue' /* webpackChunkName: "pages/en/volounteer" */))
const _44ec7376 = () => interopDefault(import('..\\pages\\en\\world.vue' /* webpackChunkName: "pages/en/world" */))
const _180b017c = () => interopDefault(import('..\\pages\\task\\add-info.vue' /* webpackChunkName: "pages/task/add-info" */))
const _5e25e6ce = () => interopDefault(import('..\\pages\\task\\add-task.vue' /* webpackChunkName: "pages/task/add-task" */))
const _35e26ac6 = () => interopDefault(import('..\\pages\\task\\arrest-enemies.vue' /* webpackChunkName: "pages/task/arrest-enemies" */))
const _345cc092 = () => interopDefault(import('..\\pages\\task\\barricades.vue' /* webpackChunkName: "pages/task/barricades" */))
const _3dad27ca = () => interopDefault(import('..\\pages\\task\\block-tg.vue' /* webpackChunkName: "pages/task/block-tg" */))
const _2252d3a9 = () => interopDefault(import('..\\pages\\task\\bloggers.vue' /* webpackChunkName: "pages/task/bloggers" */))
const _51de071a = () => interopDefault(import('..\\pages\\task\\business-petition.vue' /* webpackChunkName: "pages/task/business-petition" */))
const _296b180c = () => interopDefault(import('..\\pages\\task\\cocktail.vue' /* webpackChunkName: "pages/task/cocktail" */))
const _62c97a1e = () => interopDefault(import('..\\pages\\task\\communication.vue' /* webpackChunkName: "pages/task/communication" */))
const _71b3bce2 = () => interopDefault(import('..\\pages\\task\\copywriting.vue' /* webpackChunkName: "pages/task/copywriting" */))
const _aaf8480e = () => interopDefault(import('..\\pages\\task\\cyber-army.vue' /* webpackChunkName: "pages/task/cyber-army" */))
const _594393c8 = () => interopDefault(import('..\\pages\\task\\cyber-security.vue' /* webpackChunkName: "pages/task/cyber-security" */))
const _431d7b68 = () => interopDefault(import('..\\pages\\task\\ddos.vue' /* webpackChunkName: "pages/task/ddos" */))
const _5356b83b = () => interopDefault(import('..\\pages\\task\\find-home.vue' /* webpackChunkName: "pages/task/find-home" */))
const _2ef5522d = () => interopDefault(import('..\\pages\\task\\fund.vue' /* webpackChunkName: "pages/task/fund" */))
const _cf71f9b4 = () => interopDefault(import('..\\pages\\task\\give-blood.vue' /* webpackChunkName: "pages/task/give-blood" */))
const _254a1ad5 = () => interopDefault(import('..\\pages\\task\\give-transport.vue' /* webpackChunkName: "pages/task/give-transport" */))
const _a4d93eae = () => interopDefault(import('..\\pages\\task\\help.vue' /* webpackChunkName: "pages/task/help" */))
const _bfda66ac = () => interopDefault(import('..\\pages\\task\\inform-enemies.vue' /* webpackChunkName: "pages/task/inform-enemies" */))
const _bfc7ec0a = () => interopDefault(import('..\\pages\\task\\make-photo.vue' /* webpackChunkName: "pages/task/make-photo" */))
const _39b9132c = () => interopDefault(import('..\\pages\\task\\media.vue' /* webpackChunkName: "pages/task/media" */))
const _6836f4f4 = () => interopDefault(import('..\\pages\\task\\nbu-donation.vue' /* webpackChunkName: "pages/task/nbu-donation" */))
const _4a08a966 = () => interopDefault(import('..\\pages\\task\\notify-targets.vue' /* webpackChunkName: "pages/task/notify-targets" */))
const _f33f65a6 = () => interopDefault(import('..\\pages\\task\\notify-troops.vue' /* webpackChunkName: "pages/task/notify-troops" */))
const _28c82d20 = () => interopDefault(import('..\\pages\\task\\psychology-aid.vue' /* webpackChunkName: "pages/task/psychology-aid" */))
const _6c7253a3 = () => interopDefault(import('..\\pages\\task\\red-cross-donation.vue' /* webpackChunkName: "pages/task/red-cross-donation" */))
const _2532724f = () => interopDefault(import('..\\pages\\task\\refugee-home.vue' /* webpackChunkName: "pages/task/refugee-home" */))
const _be515c2e = () => interopDefault(import('..\\pages\\task\\refugee-transport.vue' /* webpackChunkName: "pages/task/refugee-transport" */))
const _0c688f35 = () => interopDefault(import('..\\pages\\task\\remove-signs.vue' /* webpackChunkName: "pages/task/remove-signs" */))
const _bd15ebbe = () => interopDefault(import('..\\pages\\task\\remove-targets.vue' /* webpackChunkName: "pages/task/remove-targets" */))
const _f2b4288c = () => interopDefault(import('..\\pages\\task\\safety.vue' /* webpackChunkName: "pages/task/safety" */))
const _6cb01996 = () => interopDefault(import('..\\pages\\task\\sign-petition.vue' /* webpackChunkName: "pages/task/sign-petition" */))
const _784a25c6 = () => interopDefault(import('..\\pages\\task\\thousand.vue' /* webpackChunkName: "pages/task/thousand" */))
const _b1b6bb0e = () => interopDefault(import('..\\pages\\task\\tro.vue' /* webpackChunkName: "pages/task/tro" */))
const _a59ad126 = () => interopDefault(import('..\\pages\\task\\upvote.vue' /* webpackChunkName: "pages/task/upvote" */))
const _9619234a = () => interopDefault(import('..\\pages\\task\\volounteer.vue' /* webpackChunkName: "pages/task/volounteer" */))
const _4e5e4e79 = () => interopDefault(import('..\\pages\\task\\whistleblower.vue' /* webpackChunkName: "pages/task/whistleblower" */))
const _2201e576 = () => interopDefault(import('..\\pages\\message\\_id.vue' /* webpackChunkName: "pages/message/_id" */))
const _404b2602 = () => interopDefault(import('..\\pages\\task\\_id.vue' /* webpackChunkName: "pages/task/_id" */))
const _a896a202 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'hash',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/en",
    component: _5c443e94,
    name: "en"
  }, {
    path: "/messages",
    component: _3af2dd2f,
    name: "messages"
  }, {
    path: "/resources",
    component: _ee59df5c,
    name: "resources"
  }, {
    path: "/task",
    component: _ebfab5cc,
    name: "task"
  }, {
    path: "/tasks",
    component: _30ab788a,
    name: "tasks"
  }, {
    path: "/volounteer",
    component: _963668d4,
    name: "volounteer"
  }, {
    path: "/world",
    component: _1ec341bf,
    name: "world"
  }, {
    path: "/en/messages",
    component: _0ec33c18,
    name: "en-messages"
  }, {
    path: "/en/resources",
    component: _2f0e8e89,
    name: "en-resources"
  }, {
    path: "/en/tasks",
    component: _0dd37572,
    name: "en-tasks"
  }, {
    path: "/en/volounteer",
    component: _53cdd782,
    name: "en-volounteer"
  }, {
    path: "/en/world",
    component: _44ec7376,
    name: "en-world"
  }, {
    path: "/task/add-info",
    component: _180b017c,
    name: "task-add-info"
  }, {
    path: "/task/add-task",
    component: _5e25e6ce,
    name: "task-add-task"
  }, {
    path: "/task/arrest-enemies",
    component: _35e26ac6,
    name: "task-arrest-enemies"
  }, {
    path: "/task/barricades",
    component: _345cc092,
    name: "task-barricades"
  }, {
    path: "/task/block-tg",
    component: _3dad27ca,
    name: "task-block-tg"
  }, {
    path: "/task/bloggers",
    component: _2252d3a9,
    name: "task-bloggers"
  }, {
    path: "/task/business-petition",
    component: _51de071a,
    name: "task-business-petition"
  }, {
    path: "/task/cocktail",
    component: _296b180c,
    name: "task-cocktail"
  }, {
    path: "/task/communication",
    component: _62c97a1e,
    name: "task-communication"
  }, {
    path: "/task/copywriting",
    component: _71b3bce2,
    name: "task-copywriting"
  }, {
    path: "/task/cyber-army",
    component: _aaf8480e,
    name: "task-cyber-army"
  }, {
    path: "/task/cyber-security",
    component: _594393c8,
    name: "task-cyber-security"
  }, {
    path: "/task/ddos",
    component: _431d7b68,
    name: "task-ddos"
  }, {
    path: "/task/find-home",
    component: _5356b83b,
    name: "task-find-home"
  }, {
    path: "/task/fund",
    component: _2ef5522d,
    name: "task-fund"
  }, {
    path: "/task/give-blood",
    component: _cf71f9b4,
    name: "task-give-blood"
  }, {
    path: "/task/give-transport",
    component: _254a1ad5,
    name: "task-give-transport"
  }, {
    path: "/task/help",
    component: _a4d93eae,
    name: "task-help"
  }, {
    path: "/task/inform-enemies",
    component: _bfda66ac,
    name: "task-inform-enemies"
  }, {
    path: "/task/make-photo",
    component: _bfc7ec0a,
    name: "task-make-photo"
  }, {
    path: "/task/media",
    component: _39b9132c,
    name: "task-media"
  }, {
    path: "/task/nbu-donation",
    component: _6836f4f4,
    name: "task-nbu-donation"
  }, {
    path: "/task/notify-targets",
    component: _4a08a966,
    name: "task-notify-targets"
  }, {
    path: "/task/notify-troops",
    component: _f33f65a6,
    name: "task-notify-troops"
  }, {
    path: "/task/psychology-aid",
    component: _28c82d20,
    name: "task-psychology-aid"
  }, {
    path: "/task/red-cross-donation",
    component: _6c7253a3,
    name: "task-red-cross-donation"
  }, {
    path: "/task/refugee-home",
    component: _2532724f,
    name: "task-refugee-home"
  }, {
    path: "/task/refugee-transport",
    component: _be515c2e,
    name: "task-refugee-transport"
  }, {
    path: "/task/remove-signs",
    component: _0c688f35,
    name: "task-remove-signs"
  }, {
    path: "/task/remove-targets",
    component: _bd15ebbe,
    name: "task-remove-targets"
  }, {
    path: "/task/safety",
    component: _f2b4288c,
    name: "task-safety"
  }, {
    path: "/task/sign-petition",
    component: _6cb01996,
    name: "task-sign-petition"
  }, {
    path: "/task/thousand",
    component: _784a25c6,
    name: "task-thousand"
  }, {
    path: "/task/tro",
    component: _b1b6bb0e,
    name: "task-tro"
  }, {
    path: "/task/upvote",
    component: _a59ad126,
    name: "task-upvote"
  }, {
    path: "/task/volounteer",
    component: _9619234a,
    name: "task-volounteer"
  }, {
    path: "/task/whistleblower",
    component: _4e5e4e79,
    name: "task-whistleblower"
  }, {
    path: "/message/:id?",
    component: _2201e576,
    name: "message-id"
  }, {
    path: "/task/:id",
    component: _404b2602,
    name: "task-id"
  }, {
    path: "/",
    component: _a896a202,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
