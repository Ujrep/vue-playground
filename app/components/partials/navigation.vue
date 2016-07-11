<style lang="scss">
@import 'app/common/utils/colors.scss';
@import 'app/common/utils/variables.scss';

  .Navigation {
    margin: 0 0 70px;

    background-color: $tundora;
    border-top: 3px solid $tundora;

  }

  .Navigation-items {
    display: inline-block;
    list-style: none;
    margin: 0 100px 0 0;
    padding: 0;
  }

  .Navigation-item {
    position: relative;
    display: inline-block;
    padding: 20px 20px;

    &.selected {
      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;

        width: 60px;
        height: 2px;

        background-color: $barley-corn;
        transform: translateX(-50%);
      }
      .Navigation-anchor {
        color: $white;
      }
    }
  }

  .Navigation-anchor {
    text-decoration: none;
    font-size: 18px;
    color: $barley-corn;
  }

  .Navigation-search {
    display: inline-block;
    position: relative;
  }

  .Navigation-searchArea {
    display: none;
    position: absolute;
    top: 0;
    right: 26px;

    width: 100%;
    height: auto;
  }
</style>

<template>

  <div class="Navigation">
    <ul class="Navigation-items">
      <li class="Navigation-item" v-for="category in categories">
        <a href="#" class="Navigation-anchor">
          {{ category }}
        </a>
      </li>
    </ul>
    <div class="Navigation-search">
      <icon icon-id="search"></icon>
      <div class="Navigation-searchArea">
        <input class="Navigation-searchInput" type="text" name="search" value="">
        <ul class="Navigation-searchList">
          <li class="Navigation-searchItem">
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
  import Button from 'components/common/button.vue';
  import Dropdown from 'components/common/dropdown.vue';
  import Icon from 'components/common/icon.vue';

  export default {
    name: 'Navigation',
    components: {
      'custom-button': Button,
      'custom-dropdown': Dropdown,
      'icon': Icon
    },
    data() {
      return {
        categories: ['Recomandate', 'Femei', 'Lesbiene', 'Barbati', 'Gay', 'Cupluri', 'BDSM', 'Masaj', 'Agentii']
      };
    }
  };
</script>
