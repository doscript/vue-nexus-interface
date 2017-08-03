<template>
  <el-submenu v-if="isContainMore(model)" :index="model.id" class="eben-nav-submenu">
    <template slot="title">
      <i v-if="model.icon" :class="`el-icon-${model.icon}`"></i>
      {{ model.title[$currentLang] }}
    </template>
    <template v-for="(item, index) in model.children">
      <a v-if="!isContainMore(item) && item.type == 'open'" :href="item.path" :target="item.target" class="open-target">
        <el-menu-item :class="item.path === $route.path ? 'is-active': ''" index="item.id">
          {{ item.title[$currentLang] }}
        </el-menu-item>
      </a>
      <el-menu-item :class="item.path === $route.path ? 'is-active': ''" @click="onMenuItemClick(item)" index="item.id">
        {{ item.title[$currentLang] }}
      </el-menu-item>
      <side-nav-node :model="item"></side-nav-node>
    </template>
  </el-submenu>
</template>

<script>
export default {
  name: 'side-nav-node',

  props: {
    model: {
      type: Object,
      required: true,
      default: () => {}
    },
  },

  methods: {
    isContainMore (model) {
      return model.children && model.children.length
    },

    onMenuItemClick (item) {
      console.log(item);
      document.getElementById('app').className = '';
      this.$router.push(item.path)
    }
  }
}
</script>
