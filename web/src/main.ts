import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './locales/i18n'
import { globalTranslations } from '@/locales/i18n'
import type { Translations } from '@/locales/Translations'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const vuetify = createVuetify({
    components,
    directives
  })

library.add(faLinkedin, faGithub);

const app = createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(router)
  .use(vuetify)
  .use(i18n)

app.config.globalProperties.$globalTranslations = globalTranslations.value as Translations

app.mount('#app')
