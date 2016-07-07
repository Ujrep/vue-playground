<style lang="scss">
  @import "app/common/utils/variables.scss";

  .Footer {
    height: $footer-height;
    max-width: 1170px;

    margin: 0 auto;

    background: orange;
  }

</style>

<template>

  <footer class="Footer">
    Footer
  </footer>

</template>

<script>

  export default {
    name: 'Footer',
    data() {
      return {
      };
    },
    components: {
    }
  };
</script>
