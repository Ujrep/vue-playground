<style lang="scss">
@import 'app/common/utils/colors.scss';
@import 'app/common/utils/variables.scss';

  .NewAdded {
    padding: 0 0 70px;

    text-align: left;

    overflow: hidden;
  }

  .NewAdded-items {
    margin: 0;
    padding: 0;

    transition: all .5s linear;
  }

  .NewAdded-tag {
    position: relative;
    width: 100%;
    padding: 0 0 20px;
    margin: 0 0 20px;

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

  .NewAdded-title {
    margin: 0;
    padding: 0;

    font-size: 18px;
    color: $white;
  }

  .NewAdded-arrows {
    position: absolute;
    right: 5px;
    top: 5px;
  }

  .NewAdded-arrow {
    margin: 0 0 0 10px;

    svg {
      transform: translate(-50%, -50%) rotate(-90deg);
      height: 8px;
    }

    &--right {
      svg {
        transform: translate(-50%, -50%) rotate(90deg);
      }
    }
  }

</style>

<template>
  <div class="NewAdded">
    <div class="NewAdded-tag">
      <p class="NewAdded-title">
        Escorte Noi
      </p>
      <div class="NewAdded-arrows">
        <icon class="NewAdded-arrow" icon-id="arrow" @click="goLeft"></icon>
        <icon class="NewAdded-arrow NewAdded-arrow--right" icon-id="arrow" @click="goRight"></icon>
      </div>
    </div>
    <div class="NewAdded-items"
        :style="{width: containerWidth + 'px',
                marginLeft: translation + 'px' }">
      <preview v-for="item in items" type="small" :item="item"></preview>
    </div>
  </div>

</template>

<script>
  import Preview from 'components/common/preview.vue';
  import Icon from 'components/common/icon.vue';

  export default {
    name: 'NewAdded',
    components: {
      'preview': Preview,
      'icon': Icon
    },
    ready() {
      this.containerWidth = this.items.length * 100;
    },
    data() {
      return {
        containerWidth: 0,
        translation: 0,
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
          }
        ]
      };
    },
    methods: {
      goLeft() {
        if (this.translation < 0) {
          this.translation += 200;
        }
      },
      goRight() {
        // margin is smaller than the container full with minus the element's visible width
        if (Math.abs(this.translation) + 200 < this.containerWidth - this.$el.offsetWidth) {
          this.translation -= 200;
        }
      }
    }
  };
</script>
