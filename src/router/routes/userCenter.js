import Frame from '@views/Frame'
import { $utils } from '@helper'

export default [
  {
    path: '/',
    component: Frame,
    children: [
      {
        path: 'user-center/login',
        meta: {
          ignoreAuth: true,
          title: $utils.titleLang('登录／注销', 'Login'),
        },
        component: resolve => require(['../../views/userCenter/Login'], resolve)
      },
      {
        path: 'user-center/user-info',
        meta: {
          ignoreAuth: false,
          title: $utils.titleLang('个人资料', 'UserInfo'),
        },
        component: resolve => require(['../../views/userCenter/UserInfo'], resolve)
      },
      {
        path: 'user-center/mind-cloud',
        meta: {
          ignoreAuth: false,
          title: $utils.titleLang('智慧云', 'MindCloud'),
        },
        component: resolve => require(['../../views/userCenter/MindCloud'], resolve)
      },
      {
        path: 'user-center/mdm',
        meta: {
          ignoreAuth: false,
          title: $utils.titleLang('设备管理', 'MDM'),
        },
        component: resolve => require(['../../views/userCenter/MDM'], resolve)
      },
      {
        path: 'user-center/account',
        meta: {
          ignoreAuth: false,
          title: $utils.titleLang('账户管理', 'Account'),
        },
        component: resolve => require(['../../views/userCenter/Account'], resolve)
      },
    ]
  },
]
