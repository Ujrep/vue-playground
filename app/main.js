import 'common/base.scss';

import Vue from 'vue';
import VueRouter from 'vue-router';

import Landing from 'components/pages/landing-page.vue';
import Home from 'components/pages/home.vue';
import Footer from 'components/partials/footer.vue';

Vue.use(VueRouter);
Vue.component('sticky-footer', Footer);

const App = Vue.extend();

const router = new VueRouter({
  linkActiveClass: 'selected',
  hashbang: false,
  history: true
});
router.map({
  '/': {
    component: Landing
  },
  '/home': {
    component: Home
  }
});

router.redirect({
  '*': '/'
});

router.start(App, '#app');
