<style lang="scss">
  @import 'app/common/utils/variables.scss';
  @import 'app/common/utils/colors.scss';

  .Button {
    position: relative;
    padding: 10px 80px;
    margin: 10px 20px;

    display: inline-block;
    vertical-align: middle;
    border: none;
    outline: none;
    background: none;
    text-decoration: none;

    font-size: 20px;
    color: $white;

    border-radius: 4px;

    &:before {
      content: '';
      position: absolute;
      left: -6px;
      top: -6px;

      width: 100%;
      height: 100%;

      padding: 4px;

      border-radius: 10px;
    }

    &--small {
      padding: 5px 40px;
      font-size: 14px;
    }

    &--primary {
      background: $barley-corn;
      &:before {
        border: 2px solid $barley-corn;
      }
    }

    &--secondary {
      color: $wood-bark;
      &:before {
        border: 2px solid $wood-bark;
      }
    }

    &--third {
      color: $scorpions;
      &:before {
        border: 2px solid $scorpions;
      }
    }
  }
</style>

<template>
  <a class="Button Button--{{type}} Button--{{size}}">
    {{ text }}
  </a>
</template>

<script>
  export default {
    name: 'CustomButton',

    props: ['type', 'text', 'size'],
  };
</script>
