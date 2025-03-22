import { root } from '@lynx-js/react'

import FirstImageCard from './FirstImageCard/index.jsx'

root.render(<FirstImageCard />)

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
}
