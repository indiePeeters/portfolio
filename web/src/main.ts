import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './locales/i18n'
import { globalTranslations } from '@/locales/i18n'
import type { Translations } from './locales/Translations'

const app = createApp(App);

app.use(router)

app.use(i18n)
app.config.globalProperties.$globalTranslations = globalTranslations.value as Translations

app.mount('#app')
