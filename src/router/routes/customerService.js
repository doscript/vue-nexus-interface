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
    ]
  },
]
