<style lang="scss">
@import 'app/common/utils/colors.scss';
@import 'app/common/utils/variables.scss';

  .Header {
    height: $header-height;

    padding: 10px 0 0;

    text-align: left;
  }

  .Header-title {
    display: inline-block;
    margin: 0;
    padding: 0;

    font-size: 40px;
    color: $barley-corn;
  }

  .Header-actions {
    display: inline-block;
    float: right;
  }

</style>

<template>

  <div class="Header">
    <h1 class="Header-title">Intima - National</h1>
    <div class="Header-actions">
      <custom-button text="Login" type="third" size="small"></custom-button>
      <custom-button text="Cont Nou" type="primary" size="small"></custom-button>
      <custom-dropdown placeholder="Limba" :options="options" value="Limba Romana"></custom-dropdown>
    </div>
  </div>

</template>

<script>
  import Button from 'components/common/button.vue'
  import Dropdown from 'components/common/dropdown.vue'

  export default {
    name: 'Header',
    components: {
      'custom-button': Button,
      'custom-dropdown': Dropdown
    },
    data() {
      return {
        options: ['Limba Romana', 'English Language', 'French Language']
      };
    }
  };
</script>
