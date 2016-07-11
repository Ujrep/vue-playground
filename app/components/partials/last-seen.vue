<style lang="scss">
@import 'app/common/utils/colors.scss';
@import 'app/common/utils/variables.scss';

  .LastSeen {
    margin: 0 0 70px;

    text-align: left;

    overflow: hidden;
  }

  .LastSeen-items {
    margin: 0;
    padding: 0;
    overflow: auto;

    transition: all .5s linear;
  }

  .LastSeen-tag {
    position: relative;
    width: 100%;
    padding: 0 0 20px;
    margin: 0 0 20px;

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

  .LastSeen-remove {
    position: absolute;
    right: 5px;
    top: 5px;

    &:before {
      content: 'Clear All';

      font-size: 18px;
      font-weight: bold;
      color: $dark-tan;

    }
  }

</style>

<template>
  <div class="LastSeen">
    <div class="LastSeen-tag">
      Ultimele Vazute
      <div class="LastSeen-remove">
        <icon icon-id="close" type="negative"></icon>
      </div>
    </div>
    <div class="LastSeen-items">
      <preview v-for="item in items" type="small" :item="item"></preview>
    </div>
  </div>

</template>

<script>
  import Preview from 'components/common/preview.vue';
  import Icon from 'components/common/icon.vue';

  export default {
    name: 'LastSeen',
    components: {
      'preview': Preview,
      'icon': Icon
    },
    data() {
      return {
        items: [
          {
            image: 'https://i.ytimg.com/vi/TZiQK81Rjfw/maxresdefault.jpg',
            id: '12',
            name: 'Andreea Esca',
            age: '46',
            location: 'Bucharest, Romania',
            type: 'News Presenter'
          }, {
            image: 'http://portra.wpshower.com/wp-content/uploads/2014/03/martin-schoeller-emma-watson-portrait-up-close-and-personal-1126x1280.jpg',
            id: '123',
            name: 'Andreea Esca',
            age: '46',
            location: 'Bucharest, Romania',
            type: 'News Presenter'
          }, {
            image: 'http://www.stockvault.net/blog/wp-content/uploads/2013/11/Portrait-8.jpg',
            id: '1245',
            name: 'Andreea Esca',
            age: '46',
            location: 'Bucharest, Romania',
            type: 'News Presenter'
          },
          {
            image: 'https://i.ytimg.com/vi/TZiQK81Rjfw/maxresdefault.jpg',
            id: '12',
            name: 'Andreea Esca',
            age: '46',
            location: 'Bucharest, Romania',
            type: 'News Presenter'
          }, {
            image: 'http://portra.wpshower.com/wp-content/uploads/2014/03/martin-schoeller-emma-watson-portrait-up-close-and-personal-1126x1280.jpg',
            id: '123',
            name: 'Andreea Esca',
            age: '46',
            location: 'Bucharest, Romania',
            type: 'News Presenter'
          }, {
            image: 'http://www.stockvault.net/blog/wp-content/uploads/2013/11/Portrait-8.jpg',
            id: '1245',
            name: 'Andreea Esca',
            age: '46',
            location: 'Bucharest, Romania',
            type: 'News Presenter'
          },
          {
            image: 'https://i.ytimg.com/vi/TZiQK81Rjfw/maxresdefault.jpg',
            id: '12',
            name: 'Andreea Esca',
            age: '46',
            location: 'Bucharest, Romania',
            type: 'News Presenter'
          }, {
            image: 'http://portra.wpshower.com/wp-content/uploads/2014/03/martin-schoeller-emma-watson-portrait-up-close-and-personal-1126x1280.jpg',
            id: '123',
            name: 'Andreea Esca',
            age: '46',
            location: 'Bucharest, Romania',
            type: 'News Presenter'
          }, {
            image: 'http://www.stockvault.net/blog/wp-content/uploads/2013/11/Portrait-8.jpg',
            id: '1245',
            name: 'Andreea Esca',
            age: '46',
            location: 'Bucharest, Romania',
            type: 'News Presenter'
          },
          {
            image: 'https://i.ytimg.com/vi/TZiQK81Rjfw/maxresdefault.jpg',
            id: '12',
            name: 'Andreea Esca',
            age: '46',
            location: 'Bucharest, Romania',
            type: 'News Presenter'
          }
        ]
      };
    },
  };
</script>
