import { $utils } from '@helper'

export default {
  title: $utils.titleLang('商务平板', 'Business Tablet'),
  id: 'businessTablet',
  icon: 'ADM_Manage',
  children: [{
    title: $utils.titleLang('T9S', 'T9S'),
    path: '/businessTablet/T9S'
  }, {
    title: $utils.titleLang('T9标准版', 'T9 Standard'),
    path: '/businessTablet/T9'
  }]
}
