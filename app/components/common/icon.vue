<style lang="scss">
  @import 'app/common/utils/colors.scss';

  .Icon {
    position: relative;
    display: inline-block;
    vertical-align: middle;

    width: 24px;
    height: 24px;

    background-color: $tobaco-brown;
    border-radius: 50%;
    cursor: pointer;

    &:before {
      content: '';
      position: absolute;
      left: -4px;
      top: -4px;

      width: 28px;
      height: 28px;

      border-radius: 50%;
      border: 2px solid $barley-corn;
    }

    &--square {
      height: 30px;
      border-radius: 4px;

      &:before {
        height: 34px;
        border-radius: 4px;
      }
    }

    &--red {
      background-color: $dark-tan;

      &:before {
        display: none;
      }
    }

    &--normal {
      background-color: transparent;

      &:before {
        display: none;
      }
    }
  }

  .Icon-icon {
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    width: 14px;
    height: 14px;

    fill: $white;
  }

</style>

<template>
  <div class="Icon Icon--{{type}}">
    <svg class="Icon-icon"><use xlink:href="#{{ iconId }}"></use></svg>
  </div>
</template>

<script>
  export default {
    name: 'Icon',

    props: ['iconId', 'type'],

    data() {
      return {
      };
    },

    methods: {

    }
  };
</script>
