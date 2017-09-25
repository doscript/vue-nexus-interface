import { $utils } from '@helper'

export default {
  title: $utils.titleLang('个人中心', 'EBEN UserCenter'),
  id: 'userCenter',
  icon: 'ADM_Manage',
  children: [
    {
      title: $utils.titleLang('个人资料', 'EBEN UserInfo'),
      path: '/user-center/user-info',
      query: {  },
      pageTitle: $utils.titleLang('个人资料 - E人E本', 'EBEN UserInfo'),
      type: ''
    },
    {
      title: $utils.titleLang('智慧云', 'EBEN MindCloud'),
      path: '/user-center/mind-cloud',
      query: {  },
      pageTitle: $utils.titleLang('智慧云 - E人E本', 'EBEN MindCloud'),
      type: ''
    },
    {
      title: $utils.titleLang('设备管理', 'EBEN MDM'),
      path: '/user-center/mdm',
      query: {  },
      pageTitle: $utils.titleLang('设备管理 - E人E本', 'EBEN MDM'),
      type: ''
    },
    {
      title: $utils.titleLang('账户管理', 'EBEN Account'),
      path: '/user-center/account',
      query: {  },
      pageTitle: $utils.titleLang('账户管理 - E人E本', 'EBEN Account'),
      type: ''
    },
    {
      title: $utils.titleLang('登录／注销', 'EBEN Login'),
      path: '/user-center/login',
      query: {  },
      pageTitle: $utils.titleLang('登录／注销 - E人E本', 'EBEN Login'),
      type: ''
    },
  ],
}
