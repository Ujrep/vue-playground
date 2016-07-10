<style lang="scss">
@import 'app/common/utils/colors.scss';
@import 'app/common/utils/variables.scss';

  .NewAdded {
    margin: 0 0 70px;
  }

  .NewAdded-items {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .NewAdded-tag {
    position: relative;
    width: 100%;
    padding: 0 0 20px;

    font-size: 18px;
    color: $white;
    text-align: left;

    &:after {
      content: '';

      position: absolute;
      bottom: 0;
      left: 0;

      width: 100%;
      height: 1px;
      background-color: $mine-shaft;
    }
  }

</style>

<template>
  <div class="NewAdded">
    <div class="NewAdded-tag">
      Escorte Noi
    </div>
    <ul class="NewAdded-items">
      <li class="NewAdded-item" v-for="girl in girls">
      </li>
    </ul>
  </div>

</template>

<script>
  import navArrow from 'components/common/button.vue'

  export default {
    name: 'NewAdded',
    components: {
      'nav-arrow': navArrow,
    },
    data() {
      return {
        girls: [
          {
            image: 'https://i.ytimg.com/vi/TZiQK81Rjfw/maxresdefault.jpg'
          }, {
            image: 'http://portra.wpshower.com/wp-content/uploads/2014/03/martin-schoeller-emma-watson-portrait-up-close-and-personal-1126x1280.jpg'
          }, {
            image: 'http://www.stockvault.net/blog/wp-content/uploads/2013/11/Portrait-8.jpg'
          }
        ]
      };
    }
  };
</script>
