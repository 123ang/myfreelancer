import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { createI18n } from 'vue-i18n';
import en from './locales/en.json'; 
import bm from './locales/bm.json'; 
import cn from './locales/cn.json';


const messages = {
    en: en,
    bm: bm,
    cn: cn
}

const i18n = createI18n({
    legacy: false,
    locale: store.state.language,
    messages
  })

export { i18n };

createApp(App).use(store).use(router).use(i18n).mount('#app')

