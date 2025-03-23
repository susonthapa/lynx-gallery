import type { MainThread, NodesRef, ScrollEvent } from "@lynx-js/types";
import LikeImageCard from "./Components/LikeImageCard.jsx";
import type { Picture } from "./Pictures/furnitures/furnituresPictures.jsx";
import { calculateEstimatedSize } from "./utils.js";
import { useCallback, useEffect, useMainThreadRef, useRef } from "@lynx-js/react";
import type { NiceScrollbarRef } from "./Components/NiceScrollbar.jsx";
import { NiceScrollbar } from "./Components/NiceScrollbar.jsx";
import { adjustScrollbarMTS, NiceScrollbarMTS } from "./Components/NiceScrollbarMtS.jsx";

export default function Gallery(props: {pictureData: Picture[]}) {
  const {pictureData} = props
  const galleryRef = useRef<NodesRef>(null)
  const scrollbarRef = useRef<NiceScrollbarRef>(null)
  const scrollbarMTSRef = useMainThreadRef<MainThread.Element>(null)

  const onScroll = useCallback((e: ScrollEvent) => {
    scrollbarRef.current?.adjustScrollbar(e.detail.scrollTop, e.detail.scrollHeight)
  }, [])

  const onScrollMTS = (e: ScrollEvent) => {
    "main thread";
    adjustScrollbarMTS(e.detail.scrollTop, e.detail.scrollHeight, scrollbarMTSRef)
  }

  useEffect(() => {
      galleryRef.current?.invoke({
        method: 'autoScroll',
        params: {
          rate: "60",
          start: true
        }
      }).exec()
  }, [])
  

  return (
    <view className="gallery-wrapper">
      <NiceScrollbar ref={scrollbarRef} />
      <NiceScrollbarMTS main-thread:ref={scrollbarMTSRef} />
      <list ref={galleryRef} className="list" list-type="waterfall" column-count={2} scroll-orientation="vertical" custom-list-name="list-container" bindscroll={onScroll} main-thread:bindscroll={onScrollMTS}>
        {pictureData.map((picture, index) => (
          <list-item estimated-main-axis-size-px={calculateEstimatedSize(picture.width, picture.height)} key={`${index}`} item-key={`${index}`}>
            <LikeImageCard picture={picture} />
          </list-item>
        ))}
      </list>
    </view>
  )
}