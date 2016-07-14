<style lang="scss">
@import 'app/common/utils/colors.scss';
@import 'app/common/utils/variables.scss';

  .AllList {
    margin: 0 0 70px;

    text-align: left;

    overflow: hidden;
  }

  .AllList-items {
    margin: 0;
    padding: 0;
    overflow: auto;

    transition: all .5s linear;
  }

  .AllList-tag {
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

  .AllList-title {
    margin: 0;
    padding: 0;

    font-size: 18px;
    color: $white;
  }

  .AllList-arrows {
    position: absolute;
    right: 5px;
    top: 5px;
  }

  .AllList-arrow {
    margin: 0 0 0 10px;

    transform: rotate(-90deg);

    &--right {
      transform: rotate(90deg);
    }

    svg {
      height: 6px;
    }
  }

  .AllList-filters {
    position: relative;

    padding: 10px 0;
  }

  .AllList-settings {
    position: absolute;
    top: 0;
    right: 0;
  }

  .AllList-location {
    display: inline-block;

    margin: 0 30px 0 0;
  }

  .AllList-switch {
    display: inline-block;

    padding: 6px;

    border-radius: 4px;
    background-color: $mine-shaft;

    vertical-align: middle;
  }

  .AllList-eachSwitch {
    display: inline-block;

    &--selected {
      .AllList-switchIcon {
        background-color: $tobaco-brown;
      }
    }
  }

  .AllList-switchIcon {
    width: 16px;
    height: 16px;

    padding: 6px;

    fill: $white;

    vertical-align: middle;

    cursor: pointer;
  }

</style>

<template>
  <div class="AllList">
    <div class="AllList-tag">
      <p class="AllList-title">
        Categorii
      </p>
      <!-- <div class="AllList-arrows">
        <icon class="AllList-arrow" icon-id="arrow" @click="goLeft"></icon>
        <icon class="AllList-arrow AllList-arrow--right" icon-id="arrow" @click="goRight"></icon>
      </div> -->
    </div>
    <div class="AllList-filters">
      <tabs :tabs="tabs" :selected="selectedTab"></tabs>
      <div class="AllList-settings">
        <custom-dropdown class="AllList-location" placeholder="Limba" :options="cities" value="Bucuresti"></custom-dropdown>
        <div class="AllList-switch">
          <div class="AllList-eachSwitch" :class="{'AllList-eachSwitch--selected': type === 'medium'}" @click="changeView('medium')">
            <svg class="AllList-switchIcon"><use xlink:href="#view-small"></use></svg>
          </div>
          <div class="AllList-eachSwitch" :class="{'AllList-eachSwitch--selected': type === 'large'}"  @click="changeView('large')">
            <svg class="AllList-switchIcon"><use xlink:href="#view-big"></use></svg>
          </div>
        </div>
      </div>
    </div>
    <div class="AllList-items">
      <preview v-for="item in items" :type="type" :item="item"></preview>
    </div>
  </div>

</template>

<script>
  import Preview from 'components/common/preview.vue';
  import Icon from 'components/common/icon.vue';
  import Dropdown from 'components/common/dropdown.vue';
  import Tabs from 'components/common/tabs.vue';

  export default {
    name: 'AllList',

    components: {
      'preview': Preview,
      'icon': Icon,
      'custom-dropdown': Dropdown,
      'tabs': Tabs
    },

    ready() {
      this.containerWidth = this.items.length * 100;
    },

    data() {
      return {
        tabs: ['Data', 'Popularitate', 'Nume'],
        type: 'medium',
        cities: ['Bucuresti', 'Botosani', 'Belgia'],
        selectedTab: 0,
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

    events: {
      changeTab(tab) {
        this.selectedTab = tab;

        this.reloadItems();
      }
    },

    methods: {
      reloadItems() {
        // this.tabs[this.selectedTab]
        // here will be an api call
      },
      changeView(type) {
        this.type = type;
      }
    }
  };
</script>
