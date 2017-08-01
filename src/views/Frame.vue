<template>
  <div class="page-frame">
    <header-component></header-component>
    <div class="frame-content">
      <side-nav></side-nav>
      <main @click="onHideMenuClick">
        <router-view></router-view>
      </main>
    </div>
    <footer-component></footer-component>
  </div>
</template>
<script>
import SideNav from './common/SideNav'
import HeaderComponent from './common/Header'
import FooterComponent from './common/Footer'

export default{
  name: 'Frame',

  props: {
  },

  data () {
    return {
    }
  },

  created () {
  },

  components: {
    SideNav,
    HeaderComponent,
    FooterComponent
  },

  methods: {
    onHideMenuClick () {
      document.getElementById('app').className = ''
    }
  }
}
</script>

<style lang="scss">
  @import '../assets/scss/variables.scss';

  .page-frame {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;

    .frame-content {
      flex: 1;
      display: flex;
    }

    main {
      flex: 1;
      min-height: calc(100vh - #{$header-height} - #{$footer-height});
    }

  }
</style>
