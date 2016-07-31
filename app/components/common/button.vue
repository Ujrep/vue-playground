<style lang="scss">
  @import 'app/common/utils/variables.scss';
  @import 'app/common/utils/colors.scss';
  @import 'app/common/utils/media.scss';

  .Button {
    position: relative;
    margin: 10px 0;
    width: 100%;

    display: inline-block;
    vertical-align: middle;
    border: none;
    outline: none;
    background: none;

    text-decoration: none;
    font-size: 26px;
    color: $white;

    cursor: pointer;
    text-align: center;

    &:before {
      content: '';
      position: absolute;
      left: -3px;
      top: -3px;

      width: 100%;
      height: 100%;

      padding: 1px;
    }

    @include media(medium) {
      width: 270px;

      margin: 0 10px;
    }

    &--small {
      width: 130px;
      padding: 5px 0;
      font-size: 14px;
    }

    &--primary {
      background: linear-gradient(to bottom, rgba(40,89,77,1) 0%, rgba(14,69,57,1) 2%, rgba(0,58,45,1) 3%, rgba(0,34,26,1) 49%, rgba(0,21,16,1) 51%, rgba(0,15,12,1) 100%);
      color: #948973;
      &:before {
        border: 2px solid #948973;
      }
    }

    &--secondary {
      background: linear-gradient(to bottom, rgba(93,0,0,1) 0%, rgba(76,0,0,1) 2%, rgba(68,0,0,1) 3%, rgba(35,0,0,1) 49%, rgba(21,0,0,1) 51%, rgba(18,0,0,1) 100%);
      color: #8b1e1e;
      &:before {
        border: 2px solid #4c0c0c;
      }
    }

    &--third {
      background: linear-gradient(to bottom, rgba(80,80,80,1) 0%, rgba(90,90,90,1) 2%, rgba(58,58,58,1) 49%, rgba(47,47,47,1) 51%, rgba(30,30,30,1) 100%);
      color: $white;
      &:before {
        border: 2px solid #434343;
      }
    }
  }

</style>

<template>
  <a class="Button Button--{{type}} Button--{{size}}">
    {{ text }}
  </a>
</template>

<script>
  export default {
    name: 'CustomButton',

    props: ['type', 'text', 'size'],
  };
</script>
