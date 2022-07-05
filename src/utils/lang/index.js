import Vue from 'vue';
import VueI18n from 'vue-i18n';
import store from '../../store';
import enLocale from './en';
import zhLocale from './zh-CN';
import zhtwLocale from './zh-TW';
import baseLocale from './base/index';

Vue.use(VueI18n);

const messages = {
  'zh-CN': {
    // Simplified Chinese package
    ...zhLocale,
    ...baseLocale.zhCN
  },
  'zh-TW': {
    // Traditional Chinese package
    ...zhtwLocale,
    ...baseLocale.zhTW
  },
  ko: {
    // English package
    ...baseLocale.ko
  },
  en: {
    // English package
    ...enLocale,
    ...baseLocale.en
  }
};

const i18n = new VueI18n({
  locale: store.state.app.language, // set locale
  messages, // locale messages
  // Hidden warning
  silentTranslationWarn: true
});

export default i18n;
