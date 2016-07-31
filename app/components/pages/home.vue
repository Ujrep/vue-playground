<style lang="scss">
  @import 'app/common/utils/colors.scss';
  @import 'app/common/utils/media.scss';

  .Home {
    height: 100%;

    background-color: $cod-gray;

    text-align: center;

    @include media(medium) {
      // margin: 0 50px;
    }

    @include media(large) {
      margin: 0 auto;
    }
  }
</style>

<template>

  <div class="Home">
    <custom-header></custom-header>
    <navigation></navigation>
    <new-added></new-added>
    <all-list></all-list>
    <last-seen></last-seen>
  </div>

</template>

<script>
  import Header from 'components/partials/header.vue';
  import Navigation from 'components/partials/navigation.vue';
  import NewAdded from 'components/partials/new-added.vue';
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
      'new-added': NewAdded,
      'last-seen': LastSeen,
      'all-list': AllList
    }
  };
</script>
