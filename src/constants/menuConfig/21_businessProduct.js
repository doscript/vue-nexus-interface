import { $utils } from '@helper'

export default {
  title: $utils.titleLang('行业产品', 'Business Tablet'),
  id: 'businessProduct',
  icon: 'ADM_Manage',
  children: [
    {
      title: $utils.titleLang('K9 (EBEN 81002)', 'K9'),
      path: '/product/eben',
      query: { mark: 'K9' },
      pageTitle: $utils.titleLang('K9 (EBEN 81002) - E人E本', 'K9'),
      type: ''
    },
    {
      title: $utils.titleLang('L2 (EBEN 82004)', 'L2'),
      path: '/product/eben',
      query: { mark: 'L2' },
      pageTitle: $utils.titleLang('L2 (EBEN 82004) - E人E本', 'L2'),
      type: ''
    },
    {
      title: $utils.titleLang('K8S', 'K8S'),
      path: '/product/eben',
      query: { mark: 'K8S' },
      pageTitle: $utils.titleLang('K8S - E人E本', 'K8S'),
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
      path: '/product/eben',
      query: { mark: 'safety' },
      pageTitle: $utils.titleLang('安全政务本 - E人E本', 'Safety'),
      type: ''
    },
  ]
}
