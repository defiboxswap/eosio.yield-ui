
import Yield from './yield.js';

const lang = {
  'zh-CN': {
    ...Yield.zhCN,
  },
  'zh-TW': {
    ...Yield.zhTW,
  },
  en: {
    ...Yield.en,
  },
  ko: {
    ...Yield.ko,
  }
};

export default {
  en: lang.en,
  ko: lang.ko,
  zhCN: lang['zh-CN'],
  zhTW: lang['zh-TW']
};
