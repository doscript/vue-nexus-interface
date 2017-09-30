import Frame from '@views/Frame'
import { $utils } from '@helper'

export default [{
  path: '/',
  component: Frame,
  children: [
    {
      path: 'about/index',
      meta: {
        ignoreAuth: true,
        title: $utils.titleLang('了解我们', 'About EBEN'),
      },
      component: resolve => require(['../../views/about/Index'], resolve)
    },

  ]
}]
