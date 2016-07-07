import 'common/base.scss';

import Vue from 'vue';
import Home from 'components/pages/home.vue';

new Vue({
  el: '#app',
  components: {
    'home': Home
  }
});
