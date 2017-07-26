import { $utils } from '@helper'

export default {
  title: $utils.titleLang('行业产品', 'Business Tablet'),
  id: 'businessProduct',
  icon: 'ADM_Manage',
  children: [
    {
      title: $utils.titleLang('K9 (EBEN 81002)', 'K9'),
      path: '/businessTablet/k9',
      type: ''
    },
    {
      title: $utils.titleLang('L2 (EBEN 82004)', 'L2'),
      path: '/businessTablet/l2',
      type: ''
    },
    {
      title: $utils.titleLang('K8S', 'K8S'),
      path: '/businessTablet/k8s',
      type: ''
    },
    {
      title: $utils.titleLang('E本解决方案', 'EBEN Solutions'),
      path: '/businessTablet/solution',
      type: ''
    },
    {
      title: $utils.titleLang('E本应用优势', 'EBEN Advantage'),
      path: '/businessTablet/advantage',
      type: ''
    },
    {
      title: $utils.titleLang('安全政务本', 'EBEN Safety'),
      path: '/businessTablet/safety',
      type: ''
    },
  ]
}
