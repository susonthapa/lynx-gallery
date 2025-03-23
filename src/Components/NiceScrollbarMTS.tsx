import { forwardRef, useCallback, useImperativeHandle, useState, type RefObject } from "@lynx-js/react"
import "../index.scss"
import type { MainThread } from "@lynx-js/types"

export interface NiceScrollbarRef {
  adjustScrollbar: (scrollTo: number, scrollHeight: number) => void
}

export const adjustScrollbarMTS = (scrollTo: number, scrollHeight: number, ref: RefObject<MainThread.Element>) => {
  "main thread";
  const listHeight = SystemInfo.pixelHeight / SystemInfo.pixelRatio - 48
  const scrollbarHeight = listHeight * (listHeight / scrollHeight)
  const scrollbarTop = listHeight * (scrollTo / scrollHeight)
  ref.current?.setStyleProperties({
    height: `${scrollbarHeight}px`,
    top: `${scrollbarTop}px`
  })
}

export const NiceScrollbarMTS = (props: { "main-thread:ref": RefObject<MainThread.Element> }) => {
  return (
    <view main-thread:ref={props["main-thread:ref"]} className="scrollbar" style={{right: "14px", backgroundColor: "darkkhaki"}}>
      <view className="scrollbar-effect glow" />
    </view>
  )
}