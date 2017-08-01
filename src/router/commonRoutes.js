/*
* 通用路由配置，需要放在配置项数组的末端
*/
import { $utils } from '@helper'
import NotFound from '@views/exception/NotFound'
export default [
  {
    path: '/',
    meta: {
      title: $utils.titleLang('首页', 'Home'),
      ignoreAuth: true
    },
    component: resolve => require(['@/views/Index'], resolve)
  },
  {
    path: '/index',
    name: 'Index',
    meta: {
      title: $utils.titleLang('首页', 'Home'),
      ignoreAuth: true
    },
    component: resolve => require(['@/views/Index'], resolve)
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
      ignoreAuth: true
    },
    component: resolve => require(['@/views/Login'], resolve)
  },
  {
    path: '*',
    meta: {
      title: '页面未找到',
      ignoreAuth: true
    },
    component: NotFound
  }
]
