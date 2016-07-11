<style lang="scss">
  @import 'app/common/utils/colors.scss';

  .Home {
    max-width: 1170px;
    height: 100%;

    margin: 0 auto;
    background-color: $cod-gray;

    text-align: center;
  }
</style>

<template>

  <div class="Home">
    <custom-header></custom-header>
    <navigation></navigation>
    <new-added></new-added>
    <last-seen></last-seen>
  </div>

</template>

<script>
  import Header from 'components/partials/header.vue';
  import Navigation from 'components/partials/navigation.vue';
  import NewAdded from 'components/partials/new-added.vue';
  import LastSeen from 'components/partials/last-seen.vue';

  export default {
    name: 'Home',
    data() {
      return {
      };
    },
    components: {
      'custom-header': Header,
      'navigation': Navigation,
      'new-added': NewAdded,
      'last-seen': LastSeen,
    }
  };
</script>
