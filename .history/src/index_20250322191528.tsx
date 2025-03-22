import { root } from '@lynx-js/react'

import { App } from './App.js'
import FirstImageCard from './FirstImageCard/index.jsx'

root.render(<FirstImageCard />)

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
}
