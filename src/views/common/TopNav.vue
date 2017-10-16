<template>
  <div class="topnav">
    <el-menu unique-opened theme="dark" mode="horizontal" :default-openeds="defaultOpeneds" >
      <template v-for="(item, index) in sideNav">
        <side-nav-node :model="item" v-if="item.children"></side-nav-node>
        <a v-else-if="item.type == 'open'" :href="item.path" :target="item.target" class="open-target">
          <el-menu-item index="item.id" class="single-menu-item" >{{ item.title[$currentLang] }}</el-menu-item>
        </a>
        <el-menu-item v-else index="item.id" @click="onMenuItemClick(item)" class="single-menu-item" >{{ item.title[$currentLang] }}</el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
  import { $utils } from '@helper'
  import SideNavNode from './SideNavNode'
  import MenuConfig from '@constants/menuConfig'

  export default {
    name: 'top-nav',

    data () {
      return {
        sideNav: MenuConfig,
        defaultOpeneds: ['']
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
  @import './../../assets/scss/mixins.scss';

  #app .topnav {
    display: none;
    background-color: $side-nav-color;
    @include transition-common(all, 0.75s, ease);

    .el-menu--dark .el-menu-item, .el-menu--dark .el-submenu__title {
      color: $char-color;
      background-color: $header-color;
      text-align: left;
      min-width: 100px;
    }
    .el-menu--dark .el-submenu__title {
      border: none;
      padding: 0;
      text-align: center;
    }
    .el-menu--dark .el-menu-item:hover, .el-menu--dark .el-submenu__title:hover {
      color: $char-hover-color;
    }

    .el-menu {
      background-color: $header-color;
      @include flex();
      @include flex-direction();
      @include justify-content(space-around);

      .el-menu-item.single-menu-item {
        display: block;
        border: none;
        padding: 0;
        text-align: center;
      }

      .eben-nav-submenu {

        .el-menu {
          display: block;
          opacity: 0.9;
        }

        .el-submenu__icon-arrow {
          display: none;
        }

      }
    }

  }

  @media (min-width: #{$responsive-width-small}){
    #app .topnav {
      display: inline-block;

      .open-target {
        padding: 0;
      }
    }
  }

</style>
