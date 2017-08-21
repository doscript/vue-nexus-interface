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
          ignoreAuth: true
        },
        component: resolve => require(['../../views/product/Index'], resolve)
      },
      {
        path: 'product/solution',
        meta: {
          ignoreAuth: true
        },
        component: resolve => require(['../../views/product/Solution'], resolve)
      },
      {
        path: 'product/advantage',
        meta: {
          ignoreAuth: true
        },
        component: resolve => require(['../../views/product/Advantage'], resolve)
      }
    ]
  },
]
