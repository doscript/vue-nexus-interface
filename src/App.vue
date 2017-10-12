<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',

  created () {
  },

  mounted () {
    document.getElementById('loading-area').style.display = 'none';
    document.getElementById('app').style.display = 'block';
  },
}
</script>
<style lang="scss">
@import "./assets/scss/style.scss";
  #app {
    height: auto;

    label {
      color: $char-color;
    }

    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s ease;
    }
    .fade-enter, .fade-leave-active {
      opacity: 0
    }

  }
</style>
