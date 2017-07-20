<template>
  <div class="sidenav">
    <el-menu router unique-opened theme="dark" :default-openeds="defaultOpeneds" >
      <template v-for="(item, index) in sideNav">
        <side-nav-node :model="item" v-if="item.children"></side-nav-node>
        <el-menu-item v-else :index="item.path" class="single-menu-item" style="padding-left: 35px;">{{ item.title[$currentLang] }}</el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
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

  components: {
    SideNavNode
  }
}
</script>

<style lang="scss">
  @import './../../assets/scss/variables.scss';
  @import './../../assets/scss/mixins.scss';
  #app {

    .el-menu--dark .el-menu-item, .el-menu--dark .el-submenu__title {
      color: $char-color;
      background-color: $side-nav-color;
    }
    .el-menu--dark .el-submenu__title {
      border-bottom: 1px solid #{$char-color};
    }
    .el-menu--dark .el-menu-item:hover, .el-menu--dark .el-submenu__title:hover {
      color: $char-hover-color;
    }
    .el-menu .el-menu-item.single-menu-item {
      border-bottom: 1px solid #fff;
    }
    .el-menu .el-menu-item.single-menu-item::before {
      padding-left: 20px;
    }

  }

  .sidenav {
    height: 0;
    min-height: inherit;
    background-color: $side-nav-color;
    padding: 0 20px;
    overflow: hidden;
    transition: all 0.75s ease;
  }

  @media (max-width: 768px){
    .menu-expand .sidenav {
      height: calc(100% - #{$header-height});
    }
  }

</style>
