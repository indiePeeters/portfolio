import { createI18n } from 'vue-i18n';
import translations from '@/locales/en'
import type { Translations } from '@/locales/Translations'
import { ref } from 'vue';

export const globalTranslations = ref<Translations>(translations);

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages: {
    en: globalTranslations.value,
    // Add more locales as needed
  },
});

export default i18n;
