<style lang="scss">
  @import 'app/common/utils/colors.scss';

  .Preview {
    display: inline-block;
    border-radius: 5px;

    background-size: cover;
    &--small {
      width: 70px;
      height: 90px;

      margin: 0 30px 0 0;
    }
  }

</style>

<template>
  <div class="Preview Preview--{{type}}" :style="{ backgroundImage: 'url(' + item.image + ')' }">
  </div>
</template>

<script>
  export default {
    name: 'Preview',

    // 3 types: small, medium and large
    // full item object (name, location, age, everything)
    props: ['type', 'item'],

    data() {
      return {
      };
    },

    methods: {

    }
  };
</script>
