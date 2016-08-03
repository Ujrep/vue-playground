<style lang="scss">
@import 'app/common/utils/colors.scss';
@import 'app/common/utils/variables.scss';
@import 'app/common/utils/media.scss';

  .Header {
    padding: 10px 0 0;

    text-align: left;

    margin: 0 20px;

    @include media(medium) {
      max-width: 1170px;
      margin: 0 auto;
    }
  }

  .Header-title {
    display: inline-block;
    margin: 0;
    padding: 0;

    background: url('/app/common/images/logo-small.png') no-repeat center;
    font-size: 65px;
    color: $barley-corn;

    text-indent: -9999px;
    line-height: 1;
  }

  .Header-actions {
    display: flex;
    justify-content: space-between;

    @include media(large) {
      display: inline-block;
      float: right;
    }
  }

  .Header-dropdown {
    display: none!important;
  }

  .Header-burger {
    position: absolute;
    right: 30px;
    top: 30px;

    svg {
      fill: #6b5b4a;
      width: 20px;
      height: 12px;
    }

    @include media(large) {
      display: none;
    }
  }

</style>

<template>

  <div class="Header">
    <h1 class="Header-title">Dame de lux with some extra</h1>
    <div class="Header-actions">
      <custom-button text="Login" type="third" size="small"></custom-button>
      <custom-button text="Cont Nou" type="primary" size="small"></custom-button>
      <custom-dropdown class="Header-dropdown" placeholder="Limba" :options="options" value="Limba Romana"></custom-dropdown>
    </div>
    <div class="Header-burger">
      {{openedMenu}}
      <icon icon-id="hamburger" type="normal" @click="openedMenu = !openedMenu"></icon>
    </div>
    <navigation device="mobile" :class="{'Navigation--opened': openedMenu}"></navigation>
  </div>

</template>

<script>
  import Button from 'components/common/button.vue';
  import Dropdown from 'components/common/dropdown.vue';
  import Icon from 'components/common/icon.vue';
  import Navigation from 'components/partials/navigation.vue';

  export default {
    name: 'Header',
    components: {
      'custom-button': Button,
      'custom-dropdown': Dropdown,
      'icon': Icon,
      'navigation': Navigation
    },
    data() {
      return {
        options: ['Limba Romana', 'English Language', 'French Language'],
        openedMenu: false,
      };
    }
  };
</script>
