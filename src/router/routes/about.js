import Frame from '@views/Frame'
import { $utils } from '@helper'

export default [{
  path: '/',
  component: Frame,
  children: [
    {
      path: 'about/index',
      meta: {
        title: $utils.titleLang('了解我们', 'About us'),
        ignoreAuth: true
      },
      component: resolve => require(['../../views/about/Index'], resolve)
    },

  ]
}]
