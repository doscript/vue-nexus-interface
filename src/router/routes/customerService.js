import Frame from '@views/Frame'
import { $utils } from '@helper'

export default [
  {
    path: '/',
    component: Frame,
    children: [
      {
        path: 'customerService/index',
        meta: {
          ignoreAuth: true
        },
        component: resolve => require(['../../views/customerService/Index'], resolve)
      },
      {
        path: 'customerService/network',
        meta: {
          ignoreAuth: true
        },
        component: resolve => require(['../../views/customerService/Network'], resolve)
      },
      {
        path: 'customerService/equestion',
        meta: {
          ignoreAuth: true
        },
        component: resolve => require(['../../views/customerService/Equestion'], resolve)
      },
      {
        path: 'customerService/knowledge',
        meta: {
          ignoreAuth: true
        },
        component: resolve => require(['../../views/customerService/Knowledge'], resolve)
      },
    ]
  },
]
