import { $utils } from '@helper'

export default {
  title: $utils.titleLang('商务平板', 'Business Tablet'),
  id: 'businessTablet',
  icon: 'ADM_Manage',
  children: [
    {
      title: $utils.titleLang('T9S', 'T9S'),
      path: '/businessTablet/t9s',
      type: ''
    },
    {
      title: $utils.titleLang('T9标准版', 'T9 Standard'),
      path: '/businessTablet/t9',
      type: ''
    },
    {
      title: $utils.titleLang('T9尊享版', 'T9 Honor'),
      path: '/businessTablet/t9honor',
      type: ''
    },
    {
      title: $utils.titleLang('T9尊享版 学习中国', 'T9 Study China'),
      path: '/businessTablet/t9study',
      type: ''
    },
    {
      title: $utils.titleLang('T8S标准版', 'T8S'),
      path: '/businessTablet/t8s',
      type: ''
    },
    {
      title: $utils.titleLang('T7增强版', 'T7S'),
      path: '/businessTablet/t7s',
      type: ''
    },
  ]
}
