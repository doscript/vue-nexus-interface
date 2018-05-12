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
      type: ''
    },
    {
      title: $utils.titleLang('智慧云', 'EBEN MindCloud'),
      path: '/user-center/mind-cloud',
      query: {  },
      type: ''
    },
    {
      title: $utils.titleLang('设备管理', 'EBEN MDM'),
      path: '/user-center/mdm',
      query: {  },
      type: ''
    },
    {
      title: $utils.titleLang('账户管理', 'EBEN Account'),
      path: '/user-center/account',
      query: {  },
      type: ''
    },
    {
      title: $utils.titleLang('登录／注销', 'EBEN Login'),
      path: '/user-center/login',
      query: {  },
      type: ''
    },
  ],
}
