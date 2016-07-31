<style lang="scss">
  @import 'app/common/utils/colors.scss';
  @import 'app/common/utils/media.scss';

  .Landing {
    height: 100%;

    text-align: center;
    background-image: url('/app/common/images/landing-background-mobile.png');
    background-repeat: repeat;
    box-shadow: inset 0px 0px 54px 39px rgba(0,0,0,0.64);

    @include media(medium) {
      background-image: url('/app/common/images/landing-background.png');
    }
  }

  .Landing-disclaimer {
    width: 90px;
    height: 90px;

    position: absolute;
    right: -4px;
    top: -4px;

    background: linear-gradient(to top, rgba(107,9,15,1) 0%, rgba(143,9,16,1) 100%);
    border-radius: 50%;

    transform: rotate(25deg);
    text-align: center;

    &:before {
      content: '';
      position: absolute;
      top: -5px;
      right: -5px;

      width: 94px;
      height: 94px;

      border: 3px solid $dark-red;
      border-radius: 50%;
    }

    @include media(medium) {
      top: 50px;
      right: 50px;

      width: 130px;
      height: 130px;

      &:before {
        width: 134px;
        height: 134px;
      }
    }
  }

  .Landing-disclaimerText {
    margin: 10px 0 0;

    font-size: 12px;
    color: $white;

    > span {
      display: block;
      font-size: 36px;
      line-height: 1;
    }

    @include media(medium) {
      font-size: 16px;

      span {
        font-size: 50px;
      }
    }
  }

  .Landing-content {
    padding: 115px 0 40px;
    margin: 0 20px;

    @include media(medium) {
      padding: 180px 0 130px;
      max-width: 1170px;
      margin: 0 auto;
    }
  }

  .Landing-title {
    margin: 0 0 30px 0;

    background: url('/app/common/images/logo-mobile.png') no-repeat center;
    text-indent: -9999px;
    font-size: 50px;

    @include media(medium) {
      margin: 0 0 60px 0;

      background: url('/app/common/images/logo.png') no-repeat center;
      font-size: 100px;
    }
  }

  .Landing-logo {
    display: block;
    height: 20px;
    width: 20px;

    margin: 0 auto 30px auto;

    background: $very-dark-grayish-orange;
  }

  .Landing-terms {
    font-size: 16px;
    color: $very-dark-grayish-orange;

    > a {
      font-size: 16px;
      color: $very-dark-grayish-orange;
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
      <h1 class="Landing-title">www.Dame de Lux.com</h1>
      <span class="Landing-logo"></span>
      <p class="Landing-terms">
        Am citit si accept <a href="javascript:void()">Termenii si conditiile</a>
      </p>
      <custom-button text="Exit -18" type="secondary" href="https://www.google.com"></custom-button>
      <custom-button text="Enter +18" type="primary" v-link="{ path: '/home' }"></custom-button>
    </div>
  </div>

</template>

<script>

  import Button from 'components/common/button.vue';

  export default {
    name: 'LadingPage',
    components: {
      'custom-button': Button,
    }
  };
</script>
