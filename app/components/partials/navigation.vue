<style lang="scss">
@import 'app/common/utils/colors.scss';
@import 'app/common/utils/variables.scss';

  .Navigation {
    margin: 0 0 70px;

    background-color: $tundora;
    border-top: 3px solid $tundora;

  }

  .Navigation-items {
    list-style: none;
    margin: 0;
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
  </div>

</template>

<script>
  import Button from 'components/common/button.vue'
  import Dropdown from 'components/common/dropdown.vue'

  export default {
    name: 'Navigation',
    components: {
      'custom-button': Button,
      'custom-dropdown': Dropdown
    },
    data() {
      return {
        categories: ['Recomandate', 'Femei', 'Lesbiene', 'Barbati', 'Gay', 'TS', 'TV', 'Cupluri', 'BDSM', 'Masaj', 'Agentii']
      };
    }
  };
</script>
