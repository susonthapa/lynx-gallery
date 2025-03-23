import { root } from '@lynx-js/react'

import Gallery from './Gallery.jsx'
import { furnituresPictures } from './Pictures/furnitures/furnituresPictures.jsx'

root.render(<Gallery pictureData={furnituresPictures} />)

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
}
