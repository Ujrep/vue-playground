<style lang="scss">
  @import 'app/common/utils/colors.scss';

  .Dropdown {
    display: inline-block;
    text-align: left;
    vertical-align: middle;
  }

  .Dropdown-content {
    position: relative;
    max-width: 270px;

    margin: 0;

    &--opened {
      .Dropdown-select {
        border-bottom-left-radius: initial;
        border-bottom-right-radius: initial;
      }

      .Dropdown-icon {
        transform: translateY(-50%) rotate(0deg);
      }

      .Dropdown-list {
        border-top: 1px solid $mine-shaft2;
        max-height: 153px;
      }
    }
  }

  .Dropdown-select {
    padding: 10px 40px 10px 20px;

    background-color: $mine-shaft;

    font-size: 14px;
    color: $white;

    border-radius: 4px;

    cursor: pointer;
  }

  .Dropdown-list {
    position: absolute;

    width: 100%;
    max-height: 0;
    overflow: hidden;

    background-color: $mine-shaft;

    transition: max-height .4s linear;

    z-index: 2;
  }

  .Dropdown-item {
    position: relative;
    width: 100%;
    height: 100%;

    padding: 10px 0 10px 20px;

    font-size: 14px;
    color: $white;

    cursor: pointer;

    &:after {
      content: '';
      position: absolute;
      left: 20px;
      bottom: -1px;

      width: calc(100% - 40px);
      height: 1px;
      background-color: $mine-shaft2;
    }

    &:last-child {
      border-bottom: initial;
    }

    &--selected {
      background-color: $barley-corn;
    }
  }

  .Dropdown-icon {
    position: absolute;
    right: 10px;
    top: 50%;

    width: 13px;
    height: 8px;

    fill: $barley-corn;

    transform: translateY(-50%) rotate(-180deg);
    transition: all .4s linear;
  }
</style>

<template>
  <div class="Dropdown">
    <div class="Dropdown-content" :class="{'Dropdown-content--opened': opened}">
        <div class="Dropdown-select" @click="toggleDropdown">{{ value }}</div>
        <svg class="Dropdown-icon"><use xlink:href="#arrow"></use></svg>
        <div class="Dropdown-list">
          <div class="Dropdown-item"
            :class="{'Dropdown-item--selected': opt === value}"
            v-for="opt in options"
            @click="select(opt)">
            {{ opt }}
          </div>
        </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'CustomDropdown',

    props: ['type', 'placeholder', 'options', 'value'],

    data() {
      return {
        opened: false
      };
    },

    methods: {
      toggleDropdown() {
        this.opened = !this.opened;
      },
      select(opt) {
        this.value = opt;
        this.toggleDropdown();
      }
    }
  };
</script>
