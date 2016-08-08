<style lang="scss">
@import 'app/common/utils/colors.scss';
@import 'app/common/utils/variables.scss';
@import 'app/common/utils/media.scss';

  .Navigation {
    display: none;

    position: relative;

    width: 100%;

    margin: 0 auto 40px auto;

    background-color: #2e2e2e;
    box-shadow: inset 0px 0px 52px 15px rgba(0,0,0,0.64);

    text-align: left;

    @include media(large) {
      display: block;
    }

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: -10%;

      height: 5px;
      width: 120%;
      background: linear-gradient(to bottom, #232323 20%, #4a4a4a 40%, #2e2e2e 100%);;
    }

    &--mobile {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      padding: 30px 0 0;

      width: 80%;

      z-index: 2;

      border-radius: 0;
      transform: translateX(110%);

      transition: transform .3s linear;
      box-shadow: inset 0px 0px 54px 9px rgba(0,0,0,0.64);

      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;

        height: 100%;
        width: 5px;
        background: linear-gradient(to left, #232323 20%, #4a4a4a 40%, #2e2e2e 100%);;
      }

      @include media(large) {
        display: none;
      }

      .Navigation-items {
        width: 100%;
        margin: 0;
      }

      .Navigation-item {
        display: block;
        width: 100%;
        padding: 10px 10px 10px 25px;

        border-bottom: 1px solid #3d3c3e;
        text-align: left;
      }

      .Navigation-search {
        width: 90%;
        position: relative;
        right: 0;
      }

      .Navigation-searchArea {
        display: block!important;
      }

      .Navigation-searchInput {
        width: 82%;
        opacity: 1;
        z-index: 1;
        visibility: visible;
      }

      .Navigation-searchList {
        width: 80%;
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
        width: 86%;
        opacity: 1;
        visibility: visible;
      }
    }


    &--opened {
      transform: translateX(20px);
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

    color: #9a8b7c;
  }

  .Navigation-search {
    position: absolute;
    top: 50%;
    right: 5%;

    width: 100%;
    text-align: right;
    transform: translateY(-50%);
    z-index: 3;

    .Icon {
      z-index: 3;
    }
  }

  .Navigation-searchArea {
    width: 90%;
    height: auto;

    margin: 0 auto;
  }

  .Navigation-searchInput {
    width: 0%;
    position: absolute;
    right: -4px;
    top: 50%;

    margin: 0;
    padding: 3px 20px 3px 10px;

    background-color: #252525;
    border: 2px solid #70593f;
    border-radius: 50px;

    outline: none;
    font-size: 14px;
    color: $white;

    transform: translateY(-50%);
    transition: all .3s linear;
    opacity: 0;
    visibility: hidden;

    z-index: 2;
  }

  .Navigation-searchList {
    position: absolute;
    top: -2px;
    right: 0%;

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

  <div class="Navigation"
      :class="{'Navigation--searchOpened': showSearchArea, 'Navigation--mobile': device === 'mobile'}"
      @click.stop>
    <div class="Navigation-search">
      <icon icon-id="search" @click="showSearchArea = !showSearchArea"></icon>
      <div class="Navigation-searchArea">
        <input class="Navigation-searchInput" type="text" name="search" v-model="searchValue" @keyup="search" placeholder="Nume, Oras, Telefon">
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
