<style lang="scss">

  // css

</style>

<template>

  <div class="Home">
    <navigation></navigation>
    <header></header>
    <heade></heade>
    <portfolio></portfolio>
    <about></about>
    <!-- <uxs></uxs> -->
    <reviews></reviews>
    <contact></contact>
    <footerr></footerr>
    <!-- html -->

  </div>

</template>

<script>
  import Navigation from 'components/partials/navigation.vue';
  import Heade from 'components/partials/heade.vue';
  import Portfolio from 'components/partials/portfolio.vue';
  import About from 'components/partials/about.vue';
  import Uxs from 'components/partials/uxs.vue';
  import Reviews from 'components/partials/reviews.vue';
  import Contact from 'components/partials/contact.vue';
  import Footerr from 'components/partials/footerr.vue';
  export default {
    data() {
      return {
        msg: 'My profile',
      };
    },
    components: {
      'navigation': Navigation,
      'heade': Heade,
      'portfolio': Portfolio,
      'about': About,
      'uxs': Uxs,
      'reviews': Reviews,
      'contact': Contact,
      'footerr': Footerr,
    }
  };
</script>
