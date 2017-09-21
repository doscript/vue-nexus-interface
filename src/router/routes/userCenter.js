import Frame from '@views/Frame'
import { $utils } from '@helper'

export default [
  {
    path: '/',
    component: Frame,
    children: [
      {
        path: 'userCenter/login',
        meta: {
          ignoreAuth: true
        },
        component: resolve => require(['../../views/userCenter/Login'], resolve)
      },

    ]
  },
]
