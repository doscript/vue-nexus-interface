import { $utils } from '@helper'

export default {
  title: $utils.titleLang('行业产品', 'Business Tablet'),
  id: 'businessProduct',
  icon: 'ADM_Manage',
  children: [{
    title: $utils.titleLang('安全政务本', 'Safety Tablet'),
    path: '/businessTablet/safety'
  }, {
    title: $utils.titleLang('E本解决方案', 'EBEN Solutions'),
    path: '/businessTablet/solution'
  }]
}
