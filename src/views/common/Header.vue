<template>
  <header class="header">
    <div class="header-content">
      <h1 class="logo">
        <a href="/" class="logo-img"></a>
      </h1>

      <a href="javascript:;" class="menu" @click="onToggleMenuClick" >
        <span></span>
      </a>

      <top-nav></top-nav>

    </div>
  </header>
</template>

<script>
import Vue from 'vue'
import TopNav from './TopNav'

export default {
  name: 'header',

  data () {
    return {
      user: {}
    }
  },

  components: {
    TopNav
  },

  computed: {
  },

  methods: {
    handleCommand (item) {
      this[`on${item}Click`]()
    },

    /* ----------------------------On Click Event---------------------------- */
    onToggleMenuClick () {
      let app = document.getElementById('app')
      app.className = !app.className ? 'menu-expand' : ''
    },

    onLogoutClick () {
      this.$apis.user.logout().then(result => {
        window.localStorage.removeItem('isLogin');

        this.$store.commit('$vuexSetUserInfo', {})
        this.$router.push('/login')
      }).catch((err) => {
        this.$router.push('/')
        this.$message.error(err.msg)
      })
    },

    onSwitchClick () {
      let targetLang = this.$currentLang === 'zh' ? 'en' : 'zh'
      window.localStorage.setItem('lang', targetLang)
      Vue.config.lang = targetLang
    }
  }
}
</script>

<style type="text/css" lang="scss">
  @import './../../assets/scss/variables.scss';

  #app .header {
    /*position: fixed;*/
    position: relative;
    z-index: 9;
    height: $header-height;
    width: 100%;
    min-width: 320px;
    background-color: $header-color;

    .header-content {
      width: 100%;
      height: 100%;
      margin: 0 auto;
      text-align: center;
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
    }

    a {
      &:hover, &:focus {
        text-decoration: none;
        span {
          text-decoration: none;
        }
      }
    }

    .menu {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      padding: 20px 15px 10px;
      width: 60px;
      height: 60px;
    }
    .menu:hover {
      background: $header-color;
    }

    .logo {
      float: left;
      padding: 6px 30px 14px;

      img {
        display: inline-block;
        vertical-align: middle;
        width: 36px;
        height: auto;
        margin-right: 10px;
      }

      .logo-img {
        background: url("../../assets/images/logo.png");
        display: inline-block;
        height: 21px;
        width: 140px;
        transition: all 0.75s ease;
      }

      .logo-img:hover{
        opacity: 0.8;
      }
    }

    .active {
      background-color: $header-hover-color;
    }
  }

  .menu-expand .menu {
    background-color: $header-color;
  }


  .menu span:after, .menu span:before {
    content: "";
    position: absolute;
    left: 0;
    top: 9px;
  }
  .menu span:after {
    top: 18px;
  }
  .menu span {
    position: relative;
    display: block;
  }
  .menu span, .menu span:after, .menu span:before {
    width: 100%;
    height: 3px;
    background-color: #fff;
    -webkit-transition: all 0.3s;
    backface-visibility: hidden;
  }
  .menu-expand .menu span {
    background-color: transparent;
  }
  .menu-expand .menu span:before {
    transform: rotate(45deg) translate(2px, 2px);
  }
  .menu-expand .menu span:after {
    transform: rotate(-45deg) translate(4px, -5px);
  }

  @media (min-width: #{$responsive-width-small}) {
    #app .header {

      .header-content {
        width: $topnav-width;

        .logo {
          padding: 6px 30px 14px 0;
          text-align: center;
          float: none;
          img {
            margin-right: 5px;
          }
        }
      }

      .menu {
        display: none;

      }
    }
  }
</style>
