import { $utils } from '@helper'

export default {
  title: $utils.titleLang('双系统平板', 'Dual System Tablet'),
  id: 'dualSystemTablet',
  icon: 'ADM_Manage',
  children: [
    {
      title: $utils.titleLang('T10', 'T10'),
      path: '/product/eben',
      query: { mark: 'T10' },
      pageTitle: $utils.titleLang('T10 - E人E本', 'EBEN T10'),
      type: ''
    },
  ]
}
