import { createI18n } from 'vue-i18n';
import translations from '@/locales/en'
import type { Translations } from '@/locales/Translations'
const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages: {
    en: translations as Translations,
    // Add more locales as needed
  },
});

export default i18n;

export const t = new Proxy(translations, {
  get(target, key) {
    return target[key as keyof Translations] || 'unknown key';
  },
}) as Translations;