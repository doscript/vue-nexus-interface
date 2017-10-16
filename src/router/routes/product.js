import Frame from '@views/Frame'
import { $utils } from '@helper'

export default [
  {
    path: '/',
    component: Frame,
    children: [
      {
        path: 'product/eben',
        meta: {
          ignoreAuth: true,
          title: $utils.titleLang('E本产品', 'Product'),
        },
        component: resolve => require(['../../views/product/Index'], resolve)
      },
      {
        path: 'product/solution',
        meta: {
          ignoreAuth: true,
          title: $utils.titleLang('E本解决方案', 'Solution'),
        },
        component: resolve => require(['../../views/product/Solution'], resolve)
      },
      {
        path: 'product/advantage',
        meta: {
          ignoreAuth: true,
          title: $utils.titleLang('E本行业优势', 'Advantage'),
        },
        component: resolve => require(['../../views/product/Advantage'], resolve)
      }
    ]
  },
]
