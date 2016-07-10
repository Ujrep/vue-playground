<style lang="scss">
  @import "app/common/utils/variables.scss";
  @import 'app/common/utils/colors.scss';

  .Footer {
    height: $footer-height;

    max-width: 1170px;

    margin: 0 auto;
    border-top: 1px solid $mine-shaft;
  }

  .Footer-links {
    display: block;
    text-align: center;
  }

  .Footer-anchor {
    font-size: 14px;
    color: $barley-corn;
    text-decoration: none;

    &:after {
      content: ' - ';
    }

    &--secondary {
      color: $scorpions;
    }

    &:last-child {
      &:after {
        content: '';
      }
    }
  }

  .Footer-dropdown {
    display: block;
    .Dropdown-content {
      margin: 30px auto;
    }
  }

</style>

<template>

  <footer class="Footer">
    <custom-dropdown placeholder="Limba" :options="options" value="Limba Romana" class="Footer-dropdown"></custom-dropdown>
    <div class="Footer-links">
      <a href="#" class="Footer-anchor">Dame de lux</a>
      <a href="#" class="Footer-anchor">Escorte de lux</a>
      <a href="#" class="Footer-anchor">Dame de companie</a>
      <a href="#" class="Footer-anchor">Escorte Bucuresti</a>
      <a href="#" class="Footer-anchor">Escorte independente</a>
      <a href="#" class="Footer-anchor">Servicii escorte Bucuresti</a>
    </div>
    <div class="Footer-links">
      <a href="#" class="Footer-anchor Footer-anchor--secondary">Escorte romania</a>
      <a href="#" class="Footer-anchor Footer-anchor--secondary">Dame de lux: Escorte femei, Masaj erotic, Escorte transexuale, Escorte masculine, Stapane de lux</a>
      <a href="#" class="Footer-anchor Footer-anchor--secondary">Bursa damelor de companie Escorte</a>
      <a href="#" class="Footer-anchor Footer-anchor--secondary">Dame de lux</a>
      <a href="#" class="Footer-anchor Footer-anchor--secondary">Escorte dame de lux</a>
      <a href="#" class="Footer-anchor Footer-anchor--secondary">Escorte reale Bucuresti</a>
      <a href="#" class="Footer-anchor Footer-anchor--secondary">Escorte de lux Bucuresti</a>
      <a href="#" class="Footer-anchor Footer-anchor--secondary">Dame de companie Romania</a>
      <a href="#" class="Footer-anchor Footer-anchor--secondary">Dame de companie Bucuresti</a>
      <a href="#" class="Footer-anchor Footer-anchor--secondary">Escorte Romania</a>
      <a href="#" class="Footer-anchor Footer-anchor--secondary">Escorte Bucuresti</a>
      <a href="#" class="Footer-anchor Footer-anchor--secondary">Escorte Independente Romania</a>
      <a href="#" class="Footer-anchor Footer-anchor--secondary">Escorte independente Bucuresti</a>
    </div>
  </footer>

</template>

<script>
  import Dropdown from 'components/common/dropdown.vue'

  export default {
    name: 'Footer',
    components: {
      'custom-dropdown': Dropdown,
    },
    data() {
      return {
        options: ['Limba Romana', 'English Language', 'French Language']
      };
    }
  };
</script>
