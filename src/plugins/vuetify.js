import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

import ru from 'vuetify/src/locale/ru.ts'

Vue.component('my-component', {
  methods: {
    changeLocale () {
      this.$vuetify.lang.current = 'ru'
    },
  },
})

export default new Vuetify({
  lang: {
    locales: { ru },
    current: 'ru',
  },
})
