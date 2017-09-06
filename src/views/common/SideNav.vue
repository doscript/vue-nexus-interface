<template>
  <div class="sidenav">
    <el-menu unique-opened theme="dark" :default-openeds="defaultOpeneds" >
      <template v-for="(item, index) in sideNav">
        <side-nav-node :model="item" v-if="item.children"></side-nav-node>
        <a v-else-if="item.type == 'open'" :href="item.path" :target="item.target" class="open-target">
          <el-menu-item index="item.id" class="single-menu-item" style="padding-left: 20px;">{{ item.title[$currentLang] }}</el-menu-item>
        </a>
        <el-menu-item v-else index="item.id" @click="onMenuItemClick(item)" class="single-menu-item" style="padding-left: 20px;">{{ item.title[$currentLang] }}</el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
  import { $utils } from '@helper'
  import SideNavNode from './SideNavNode'
  import MenuConfig from '@constants/menuConfig'

  export default {
    name: 'side-nav',

    data () {
      return {
        sideNav: MenuConfig,
        defaultOpeneds: ['demo']
      }
    },
    methods: {
      onMenuItemClick (item) {
        document.getElementById('app').className = '';
        if (item.pageTitle) {
          $utils.setTitle(item.pageTitle);
        } else {
          $utils.setTitle(item.title);
        }
        this.$router.push({path: item.path, query: item.query});
      }
    },
    components: {
      SideNavNode
    }
  }
</script>

<style lang="scss">
  @import './../../assets/scss/variables.scss';

  #app .sidenav {
    height: 0;
    min-height: inherit;
    background-color: $side-nav-color;
    padding: 0 20px;
    overflow: hidden;
    transition: all 0.75s ease;
    z-index: 11;

    .el-menu--dark {
      background: $side-nav-color;
      padding-bottom: 20px;

      .el-menu-item {
        color: $char-color;
        background-color: $side-nav-color;
      }

      .el-submenu__title {
        color: $char-color;
        background-color: $side-nav-color;
        border-bottom: 1px solid #{$side-nav-border-color};
        font-weight: $side-nav-font-weight;
      }

      .el-menu-item:hover {
        color: $char-hover-color;
      }

      .el-submenu__title:hover {
        color: $char-hover-color;
      }

    }

    .el-menu {

      .el-menu-item.single-menu-item {
        border-bottom: 1px solid #{$side-nav-border-color};
        font-weight: $side-nav-font-weight;
      }

      .el-menu-item.single-menu-item::before {
        padding-left: 20px;
      }

      .eben-nav-submenu {

        .el-menu {

          li.el-menu-item {
            text-indent: 10px;
          }
        }
      }

    }

  }

  @media (max-width: #{$responsive-width-small}) {
    #app.menu-expand {
      height: 100vh;
      overflow: hidden;

      .sidenav {
        height: calc(100% - #{$header-height});
        overflow-y: auto;

        .open-target {
          padding: 0;
        }
      }
    }

  }
</style>
