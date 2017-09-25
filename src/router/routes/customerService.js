import Frame from '@views/Frame'
import { $utils } from '@helper'

export default [
  {
    path: '/',
    component: Frame,
    children: [
      {
        path: 'customer-service/index',
        meta: {
          ignoreAuth: true
        },
        component: resolve => require(['../../views/customerService/Index'], resolve)
      },
      {
        path: 'customer-service/network',
        meta: {
          ignoreAuth: true
        },
        component: resolve => require(['../../views/customerService/Network'], resolve)
      },
      {
        path: 'customer-service/equestion',
        meta: {
          ignoreAuth: true
        },
        component: resolve => require(['../../views/customerService/Equestion'], resolve)
      },
      {
        path: 'customer-service/knowledge',
        meta: {
          ignoreAuth: true
        },
        component: resolve => require(['../../views/customerService/Knowledge'], resolve)
      },
      {
        path: 'customer-service/announcements',
        meta: {
          ignoreAuth: true
        },
        component: resolve => require(['../../views/common/ArticleList'], resolve)
      },
      {
        path: 'customer-service/article',
        meta: {
          ignoreAuth: true
        },
        component: resolve => require(['../../views/common/Article'], resolve)
      },
    ]
  },
]
