<style lang="scss">
  @import 'app/common/utils/colors.scss';

  .Preview {
    position: relative;
    display: inline-block;

    margin: 0 30px 0 0;

    background-color: $mine-shaft;

    &--small {
      width: 70px;
      height: 90px;

      .Preview-image {
        border-radius: 5px;
      }
    }

    &--medium, &--large {
      margin: 0 30px 30px 0;

      border-radius: 0 0 5px 5px;

      .Preview-image {
        height: calc(100% - 80px);

        border-radius: 5px 5px 0 0;
      }

      .Preview-info {
        display: block;
      }

      .Preview-leftArrow, .Preview-rightArrow {
        display: block;
      }

      .Preview-tooltip {
        display: none!important;
      }

    }

    &--medium {
      width: 170px;
      height: 290px;

      &:nth-child(6n) {
        margin: 0;
      }
    }

    &--large {
      width: 270px;
      height: 420px;

      &:nth-child(4n) {
        margin: 0;
      }

      .Preview-title {
        font-size: 20px;
        line-height: 1.5;
      }

      .Preview-location, .Preview-type {
        font-size: 16px;
      }

      .Preview-more {
        width: 170px;

        padding: 27px 0;

        font-size: 20px;
      }

      .Preview-fast {
        width: 100px;

        padding: 32px 0;
      }
    }

    &:hover {
      .Preview-fast, .Preview-more, .Preview-leftArrow, .Preview-rightArrow {
        transform: translateX(0);
      }

      .Preview-tooltip {
        display: block;
      }
    }
  }

  .Preview-image {
    position: relative;
    background-size: cover;

    width: 100%;
    height: 100%;

    overflow: hidden;
    cursor: pointer;
  }

  .Preview-leftArrow, .Preview-rightArrow {
    position: absolute;
    top: 50%;
    left: 0;

    display: none;

    transform: translateX(-120%);
    transition: all .2s linear;
  }

  .Preview-icon {
    border-radius: 0 4px 4px 0;

    &:before {
      border-radius: 0 4px 4px 0;
    }

    svg {
      height: 8px;
      transform: rotate(-90deg) translate(-50%, -50%);
    }
  }

  .Preview-rightArrow {
    right: 0;
    left: initial;

    transform: translateX(120%);

    .Preview-icon {
      border-radius: 4px 0 0 4px;

      &:before {
        border-radius: 4px 0 0 4px;
      }
      svg {
        transform: rotate(90deg);
      }
    }
  }

  .Preview-info {
    position: relative;
    display: none;

    height: 80px;

    text-align: center;


    overflow: hidden;
  }

  .Preview-title {
    font-size: 16px;
    font-weight: bold;
    color: $barley-corn;
    line-height: 2.4;
  }

  .Preview-location, .Preview-type {
    font-size: 14px;
    font-weight: bold;
    color: $scorpions;
  }

  .Preview-hover {
    position: absolute;
    top: 0;
    left: 0;

    height: 100%;
  }

  .Preview-fast, .Preview-more {
    float: left;

    width: 65px;

    padding: 24px 0;

    background-color: $judge-gray;

    color: $white;
    font-size: 12px;

    transform: translateX(-100%);
    transition: all .2s linear;

    cursor: pointer;
  }

  .Preview-more {
    width: 105px;

    padding: 16px 0;

    background-color: $barley-corn;

    font-size: 18px;

    transform: translateX(100%);
  }

  .Preview-tooltip {
    position: absolute;
    bottom: -30px;
    left: 50%;

    display: none!important;

    width: 150%;
    padding: 10px 20px;
    background-color: $mine-shaft;

    text-align: center;

    z-index: 3;
    transform: translateX(-50%);
  }

  .Preview-tooltip-title {
    font-size: 15px;
    color: $barley-corn;
  }

  .Preview-tooltip-location {
    font-size: 14px;
    color: $scorpions;
  }

</style>

<template>
  <div class="Preview Preview--{{type}}">
    <div class="Preview-image" :style="{ backgroundImage: 'url(' + item.image + ')' }" @click="goToSingle">
      <div class="Preview-leftArrow" @click="prevPhoto">
        <icon class="Preview-icon" icon-id="arrow" type="square"></icon>
      </div>
      <div class="Preview-rightArrow" @click="nextPhoto">
        <icon class="Preview-icon" icon-id="arrow" type="square"></icon>
      </div>
    </div>

    <div class="Preview-tooltip">
      <div class="Preview-tooltip-title">
        {{ item.name }} - {{ item.age }}
      </div>
      <div class="Preview-tooltip-location">
        {{ item.location }}
      </div>
    </div>

    <div class="Preview-info">
      <div class="Preview-title">
        {{ item.name }} - {{ item.age }}
      </div>
      <div class="Preview-location">
        {{ item.location }}
      </div>
      <div class="Preview-type">
        {{ item.type }}
      </div>
      <div class="Preview-hover">
        <div class="Preview-fast" @click="openModal">
          Vizualizare Rapida
        </div>
        <div class="Preview-more" @click="goToSingle">
          VEZI MAI MULT
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Icon from 'components/common/icon.vue';

  export default {
    name: 'Preview',

    // 3 types: small, medium and large
    // full item object (name, location, age, everything)
    props: ['type', 'item'],

    components: {
      'icon': Icon
    },

    methods: {
      openModal() {
        console.log('open Modal');
      },

      goToSingle() {
        console.log('go to singles');
      },

      nextPhoto(ev) {
        ev.stopPropagation();
        console.log('next photo');
      },

      prevPhoto(ev) {
        ev.stopPropagation();
        console.log('previous photo');
      }
    }
  };
</script>
