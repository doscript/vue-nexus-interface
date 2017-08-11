/*
* 路由跳转权限控制
*/
import Vue from 'vue'
import { $auth, $utils } from '@helper'

export default {
  // Check the login status
  checkLoginAuth (to, from, next) {
    if (to.meta.title && to.meta.title[Vue.config.lang]) {
      // 首先根据路由配置的信息设置页面title
      document.title = to.meta.title[Vue.config.lang]
    } else {
      // 若未在路由信息中配置，则在跳转页面之前将菜单配置的页面title名称存入localStorage，在此处调用
      let pageTitle = JSON.parse($utils.getTitle());
      if (pageTitle && pageTitle[Vue.config.lang]) {
        document.title = pageTitle[Vue.config.lang];
      }
    }

    if (to.meta && to.meta.ignoreAuth) {
      next()
    } else {
      if ($auth.checkSession()) {
        next()
      } else {
        console.log('Not login, return to index');
        next({
          path: '/index'
        })
      }
    }
  },

  // Check page permissions
  checkPageAuth (to, from, next) {
    if (to.meta && to.meta.ignoreAuth) {
      next()
    } else {
      // check user auth here....
      next()
    }
  }
}
