<style lang="scss">
  @import 'app/common/utils/variables.scss';
  @import 'app/common/utils/colors.scss';

  .Tabs {
    list-style: none;
    margin: 0 0 40px 0;
    padding: 0;

    border-bottom: 2px solid $barley-corn;
  }

  .Tabs-item {
    display: inline-block;

    .Tabs-button {
      &:first-child {
        margin-left: 6px;
      }
    }
  }

  .Tabs-button {
    margin: 10px 20px 0;
    padding: 5px 40px 10px;
    border-radius: 2px 2px 0 0;

    &:before {
      padding: 4px 4px 0 4px;
      border-bottom: none;
      border-radius: 5px 5px 0 0;
    }

    &.Button--primary {
      &:before {
        border-bottom: 2px solid $cod-gray;
      }
    }
  }

</style>

<template>
  <ul class="Tabs">
    <li class="Tabs-item" v-for="(index, tab) in tabs" @click="changeTab(index)">
      <custom-button
        class="Tabs-button"
        :text="tab"
        :type="index === selected ? 'primary' : 'third'"
        :data-nr="index"
        size="small">
      </custom-button>
    </li>
  </ul>
</template>

<script>
  import Button from 'components/common/button.vue';

  export default {
    name: 'Tabs',

    props: ['tabs', 'selected'],

    components: {
      'custom-button': Button
    },

    methods: {
      changeTab(index) {
        this.$dispatch('changeTab', index);
      }
    }
  };
</script>
