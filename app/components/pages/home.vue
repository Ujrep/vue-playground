<style lang="scss">
  @import 'app/common/utils/colors.scss';
  @import 'app/common/utils/media.scss';

  .Home {
    height: 100%;

    background-color: $cod-gray;

    text-align: center;

  }

  .Home-container {
    margin: 0 20px;

    @include media(medium) {
      // margin: 0 50px;
    }

    @include media(large) {
      max-width: 1170px;
      margin: 0 auto;
    }
  }
</style>

<template>

  <div class="Home">
    <div class="Home-container">
      <custom-header></custom-header>
      <navigation></navigation>
      <super-ones></super-ones>
      <all-list></all-list>
      <last-seen></last-seen>
    </div>
  </div>

</template>

<script>
  import Header from 'components/partials/header.vue';
  import Navigation from 'components/partials/navigation.vue';
  import SuperOnes from 'components/partials/super-ones.vue';
  import LastSeen from 'components/partials/last-seen.vue';
  import AllList from 'components/partials/all-list.vue';

  export default {
    name: 'Home',
    data() {
      return {
      };
    },
    components: {
      'custom-header': Header,
      'navigation': Navigation,
      'super-ones': SuperOnes,
      'last-seen': LastSeen,
      'all-list': AllList
    }
  };
</script>
