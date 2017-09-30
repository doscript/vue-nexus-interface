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
          ignoreAuth: true,
          title: $utils.titleLang('客户服务', 'Customer Service'),
        },
        component: resolve => require(['../../views/customerService/Index'], resolve)
      },
      {
        path: 'customer-service/network',
        meta: {
          ignoreAuth: true,
          title: $utils.titleLang('客服网点', 'Networks'),
        },
        component: resolve => require(['../../views/customerService/Network'], resolve)
      },
      {
        path: 'customer-service/equestion',
        meta: {
          ignoreAuth: true,
          title: $utils.titleLang('E问E答', 'EQuestion'),
        },
        component: resolve => require(['../../views/customerService/Equestion'], resolve)
      },
      {
        path: 'customer-service/knowledge',
        meta: {
          ignoreAuth: true,
          title: $utils.titleLang('知识库', 'Knowledge'),
        },
        component: resolve => require(['../../views/customerService/Knowledge'], resolve)
      },
      {
        path: 'customer-service/announcements',
        meta: {
          ignoreAuth: true,
          title: $utils.titleLang('公告', 'Announcements'),
        },
        component: resolve => require(['../../views/common/ArticleList'], resolve)
      },
      {
        path: 'customer-service/article',
        meta: {
          ignoreAuth: true,
          title: $utils.titleLang('公告', 'Articles'),
        },
        component: resolve => require(['../../views/common/Article'], resolve)
      },
    ]
  },
]
