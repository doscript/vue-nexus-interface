<template>
  <div class="topnav">
    <el-menu unique-opened theme="dark" mode="horizontal" :default-openeds="defaultOpeneds" >
      <template v-for="(item, index) in sideNav">
        <side-nav-node :model="item" v-if="item.children"></side-nav-node>
        <a v-else-if="item.type == 'open'" :href="item.path" :target="item.target" class="open-target">
          <el-menu-item index="item.id" class="single-menu-item" style="padding-left: 15px;">{{ item.title[$currentLang] }}</el-menu-item>
        </a>
        <el-menu-item v-else index="item.id" @click="onMenuItemClick(item)" class="single-menu-item" style="padding-left: 15px;">{{ item.title[$currentLang] }}</el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
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
      console.log(item);
      this.$router.push(item.path)
    }
  },
  components: {
    SideNavNode
  }
}
</script>

<style lang="scss">
  @import './../../assets/scss/variables.scss';

  #app .topnav {
    display: inline-block;
    background-color: $side-nav-color;
    transition: all 0.75s ease;

    .el-menu--dark .el-menu-item, .el-menu--dark .el-submenu__title {
      color: $char-color;
      background-color: $header-color;
      text-align: left;
      min-width: 100px;
    }
    .el-menu--dark .el-submenu__title {
      border: none;
      padding: 0 15px 0 0;
    }
    .el-menu--dark .el-menu-item:hover, .el-menu--dark .el-submenu__title:hover {
      color: $char-hover-color;
    }

    .el-menu {
      background-color: $header-color;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-around;

      .el-menu-item.single-menu-item {
        display: block;
        border: none;
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

  @media (max-width: #{$responsive-width-small}){
    #app .topnav {
      display: none;

      .open-target {
        padding: 0;
      }
    }
  }

</style>
