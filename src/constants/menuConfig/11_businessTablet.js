import { $utils } from '@helper'

export default {
  title: $utils.titleLang('商务平板', 'Business Tablet'),
  id: 'businessTablet',
  icon: 'ADM_Manage',
  children: [
    {
      title: $utils.titleLang('T9S', 'T9S'),
      path: '/product/eben',
      query: { mark: 'T9S' },
      pageTitle: $utils.titleLang('T9S - E人E本', 'EBEN T9S'),
      type: ''
    },
    {
      title: $utils.titleLang('T9标准版', 'T9 Standard'),
      path: '/product/eben',
      query: { mark: 'T9' },
      pageTitle: $utils.titleLang('T9标准版 - E人E本', 'EBEN T9 Standard'),
      type: ''
    },
    {
      title: $utils.titleLang('T9尊享版', 'T9 Honor'),
      path: '/product/eben',
      query: { mark: 'T9honor' },
      pageTitle: $utils.titleLang('T9尊享版 - E人E本', 'EBEN T9 Honor'),
      type: ''
    },
    {
      title: $utils.titleLang('T9尊享版 学习中国', 'T9 Study China'),
      path: '/product/eben',
      query: { mark: 'T9Study' },
      pageTitle: $utils.titleLang('T9尊享版（学习中国） - E人E本', 'EBEN T9 Honor Study'),
      type: ''
    },
    {
      title: $utils.titleLang('T8S标准版', 'T8S'),
      path: '/product/eben',
      query: { mark: 'T8S' },
      pageTitle: $utils.titleLang('T8S标准版 - E人E本', 'T8S'),
      type: ''
    },
    {
      title: $utils.titleLang('T7增强版', 'T7S'),
      path: '/product/eben',
      query: { mark: 'T7S' },
      pageTitle: $utils.titleLang('T7增强版 - E人E本', 'T7S'),
      type: ''
    },
  ]
}
