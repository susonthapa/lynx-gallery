import { forwardRef, useCallback, useImperativeHandle, useState } from "@lynx-js/react"
import "../index.scss"

export interface NiceScrollbarRef {
  adjustScrollbar: (scrollTo: number, scrollHeight: number) => void
}

export const NiceScrollbar = forwardRef((_, ref) => {
  const [scrollbarHeight, setScrollbarHeight] = useState(0)
  const [scrollbarTop, setScrollbarTop] = useState(0)

  const adjustScrollbar = useCallback((scrollTo: number, scrollHeight: number) => {
    const listHeight = SystemInfo.pixelHeight / SystemInfo.pixelRatio - 48
    const scrollbarHeight = listHeight * (listHeight / scrollHeight)
    const scrollbarTop = listHeight * (scrollTo / scrollHeight)
    setScrollbarHeight(scrollbarHeight)
    setScrollbarTop(scrollbarTop)
  }, [])

  useImperativeHandle(ref, () => ({
    adjustScrollbar
  }), [adjustScrollbar])

  return (
    <view className="scrollbar" style={{height: `${scrollbarHeight}px`, top: `${scrollbarTop}px`}}>
      <view className="scrollbar-effect glow" />
    </view>
  )
})