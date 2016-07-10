<style lang="scss">
  @import 'app/common/utils/colors.scss';

  .Landing {
    margin: 0 auto;

    max-width: 1170px;
    height: 100%;

    text-align: center;
  }

  .Landing-disclaimer {
    width: 120px;
    height: 120px;

    position: absolute;
    right: 30px;
    top: 60px;

    background-color: $dark-tan;
    border-radius: 50%;

    transform: rotate(20deg);
    text-align: center;
  }

  .Landing-disclaimerText {
    margin: 20px 0 0;
    font-size: 16px;
    color: $white;

    > span {
      font-size: 50px;
    }
  }

  .Landing-content {
    padding: 180px 0 130px 0;
  }

  .Landing-title {
    margin: 0 0 60px 0;

    font-size: 60px;
    color: $barley-corn;
  }

  .Landing-logo {
    display: block;
    height: 40px;
    width: 40px;

    margin: 0 auto 60px auto;

    background: $barley-corn;
  }

  .Landing-terms {
    font-size: 16px;
    color: $barley-corn;

    > a {
      font-size: 16px;
      color: $barley-corn;
      text-decoration: underline;
    }
  }

</style>

<template>

  <div class="Landing">
    <div class="Landing-disclaimer">
      <p class="Landing-disclaimerText">
        Warning! </br>
        Adult Content
        <span> +18 </span>
      </p>
    </div>
    <div class="Landing-content">
      <h1 class="Landing-title">Intima - National</h1>
      <span class="Landing-logo"></span>
      <p class="Landing-terms">
        Am citit si accept <a href="javascript:void()">Termenii si conditiile</a>
      </p>
      <custom-button text="Paraseste ( -18 )" type="secondary" href="https://www.google.com"></custom-button>
      <custom-button text="Intra ( +18 )" type="primary" v-link="{ path: '/home' }"></custom-button>
    </div>
  </div>

</template>

<script>

  import Button from 'components/common/button.vue'

  export default {
    name: 'LadingPage',
    components: {
      'custom-button': Button,
    }
  };
</script>
