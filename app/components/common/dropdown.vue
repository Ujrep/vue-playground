<style lang="scss">
  @import 'app/common/utils/colors.scss';
  @import 'app/common/utils/media.scss';

  .Dropdown {
    text-align: left;
    vertical-align: middle;
  }

  .Dropdown-content {
    position: relative;
    width: 100%;

    margin: 0;

    &--opened {
      .Dropdown-icon {
        transform: translate(50%, -50%) rotate(0deg);
      }

      .Dropdown-list {
        max-height: 153px;
      }
    }

    @include media(medium) {
      max-width: 270px;
    }
  }

  .Dropdown-select {
    padding: 6px 60px 6px 20px;

    background-color: #101010;

    font-size: 14px;
    color: #d2d2d2;

    border: 2px solid #5b5242;

    cursor: pointer;
  }

  .Dropdown-list {
    position: absolute;

    width: 100%;
    max-height: 0;
    overflow: hidden;

    background-color: #5b5242;

    transition: max-height .4s linear;

    z-index: 2;
  }

  .Dropdown-item {
    position: relative;
    width: calc(100% - 40px);
    height: 100%;

    padding: 10px 20px 10px 20px;

    font-size: 14px;
    color: #bcbab7;

    cursor: pointer;

    &:after {
      content: '';
      position: absolute;
      left: 20px;
      bottom: -1px;

      width: calc(100% - 40px);
      height: 1px;
      background-color: #635b4c;
    }

    &:last-child {
      border-bottom: initial;
    }

    &--selected {
      background-color: #7a705c;
    }
  }

  .Dropdown-iconHolder {
    width: 39px;
    height: 100%;

    position: absolute;
    right: 0;
    top: 0;

    background: #5b5242;
  }

  .Dropdown-icon {
    position: absolute;
    right: 50%;
    top: 50%;

    width: 13px;
    height: 8px;

    fill: #b6ad9f;

    transform: translate(50%, -50%) rotate(-180deg);
    transition: all .4s linear;
  }
</style>

<template>
  <div class="Dropdown">
    <div class="Dropdown-content" :class="{'Dropdown-content--opened': opened}">
        <div class="Dropdown-select" @click="toggleDropdown">{{ value }}</div>
        <div class="Dropdown-iconHolder" @click="toggleDropdown">
          <svg class="Dropdown-icon"><use xlink:href="#arrow"></use></svg>
        </div>
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
