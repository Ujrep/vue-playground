<style lang="scss">
@import 'app/common/utils/colors.scss';
@import 'app/common/utils/variables.scss';
@import 'app/common/utils/media.scss';

  .Navigation {
    display: none;

    position: relative;

    width: 100%;

    margin: 0 auto 70px auto;

    background: linear-gradient(to bottom, $mine-shaft 0%, $cod-gray2 25%, $cod-gray2 50%, $mine-shaft 100%);

    border-top: 3px solid $tundora;
    border-radius: 0 0 100px 100px;
    @include media(large) {
      display: block;
    }

    &:before {
      position: absolute;
      left: -1000px;
      top: -3px;

      width: 1000px;
      height: 3px;

      background-color: $tundora;
    }

    &:after {
      // content: '';
      position: absolute;
      right: -1000px;
      top: -3px;

      width: 1000px;
      height: 3px;

      background-color: $tundora;
    }

    &--mobile {
      display: block;
      position: absolute;
      top: 70px;
      right: 0;
      padding: 50px 0 0;

      width: 80%;

      z-index: 2;

      border-radius: 0;
      transform: translateX(100%);

      transition: transform .3s linear;

      @include media(large) {
        display: none;
      }

      .Navigation-item {
        display: block;
        padding: 10px;
        text-align: center;
      }

      .Navigation-search {
        width: 100%;
        position: relative;
        text-align: right;

        .Icon {
          z-index: 2;
        }
      }

      .Navigation-searchInput {
        right: 0;
        z-index: 1;
      }

      .Navigation-searchList {
        right: 0%;

        z-index: 0;
      }
    }

    &--searchOpened {
      .Navigation-items {
        filter: blur(5px);
      }

      .Navigation-searchArea {
        display: block;
      }

      .Navigation-searchInput {
        opacity: 1;
        width: 86%;
      }
    }


    &--opened {
      transform: translateX(0);
    }
  }

  .Navigation-items {
    display: inline-block;
    list-style: none;
    margin: 0 100px 0 0;
    padding: 0;
  }

  .Navigation-item {
    position: relative;
    display: inline-block;
    padding: 15px 20px;

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

  .Navigation-search {
    position: absolute;
    top: 50%;
    right: 5%;

    width: 100%;
    text-align: right;
    transform: translateY(-50%);
    z-index: 3;
  }

  .Navigation-searchArea {
    width: 90%;
    height: auto;

    margin: 0 auto;
  }

  .Navigation-searchInput {
    width: 0%;
    opacity: 0;
    position: absolute;
    right: 5%;;
    top: 50%;

    margin: 0;
    padding: 7px 20px;

    background-color: $cod-gray3;
    border: 0;
    border-radius: 50px;

    outline: none;
    font-size: 14px;
    color: $white;

    transform: translateY(-50%);
    transition: all .3s linear;

    z-index: 2;
  }

  .Navigation-searchList {
    position: absolute;
    top: -2px;
    right: 5%;

    width: 85%;
    max-height: 220px;

    padding: 40px 20px 10px;

    background: $mine-shaft;
    border-radius: 0 0 10px 10px;

    text-align: left;
    list-style: none;

    z-index: 1;
    overflow: auto;
  }

  .Navigation-searchItem {
    position: relative;
    padding: 10px 0;

    border-bottom: 1px solid $mine-shaft2;

    cursor: pointer;
    &:last-child {
      border-bottom: none;
    }
  }

  .Navigation-searchText {
    margin: 0;
    padding: 0;
    font-size: 15px;
    color: $boulder;
  }

  .Navigation-searchTimes {
    position: absolute;
    top: 50%;
    right: 5px;

    font-size: 16px;
    color: $barley-corn;

    transform: translateY(-50%);
  }
</style>

<template>

  <div class="Navigation" :class="{'Navigation--searchOpened': showSearchArea, 'Navigation--mobile': device === 'mobile'}">
    <div class="Navigation-search">
      <icon icon-id="search" @click="showSearchArea = !showSearchArea"></icon>
      <div class="Navigation-searchArea">
        <input class="Navigation-searchInput" type="text" name="search" v-model="searchValue" @keyup="search" placeholder="Cautare dupa cuvinte cheie, ex: blonde, gay, bdsm...">
        <ul class="Navigation-searchList" v-show="this.searchValue.length > 2">
          <li class="Navigation-searchItem" v-for="result in searchResults" @click="goToSearchPage(result)">
            <p class="Navigation-searchText">
              {{ result.text }}
            </p>
            <span class="Navigation-searchTimes">
              {{ result.times }}
            </span>
          </li>
        </ul>
      </div>
    </div>

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
  import Button from 'components/common/button.vue';
  import Dropdown from 'components/common/dropdown.vue';
  import Icon from 'components/common/icon.vue';

  export default {
    name: 'Navigation',
    components: {
      'custom-button': Button,
      'custom-dropdown': Dropdown,
      'icon': Icon
    },

    props: ['device'],

    data() {
      return {
        showSearchArea: false,
        searchValue: '',
        categories: ['Recomandate', 'Femei', 'Lesbiene', 'Barbati', 'Gay', 'Cupluri', 'BDSM', 'Masaj', 'Agentii'],
        searchResults: [
          {
            text: 'Blonda',
            times: 220
          }, {
            text: 'Bruneta',
            times: 120
          }, {
            text: 'Satena',
            times: 85
          }, {
            text: 'Si Roscata',
            times: 40
          }
        ]
      };
    },
    methods: {
      search() {
        console.log(this.searchValue);
      },
      goToSearchPage(page) {
        console.log('go to the search page', page);
      }
    }
  };
</script>
