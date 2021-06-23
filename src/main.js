import Vue from 'vue'
import App from './App.vue'

import '@/assets/scss/_main.scss'
import '@/assets/tailwind.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faMapMarkerAlt, faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faEnvelope, faMapMarkerAlt, faGithub, faLinkedin, faLink)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
}).$mount('#app')
