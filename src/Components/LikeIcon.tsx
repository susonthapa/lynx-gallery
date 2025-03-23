import { useCallback, useState } from "@lynx-js/react"
import redHeart from "../Pictures/redHeart.png";
import whiteHeart from "../Pictures/whiteHeart.png";
import "../index.scss";

export default function LikeIcon() {
  const [isLiked, setIsLiked] = useState(false)

  const onTap = useCallback(() => {
    setIsLiked(!isLiked)
  }, [isLiked])

  return (
    <view className="like-icon" bindtap={onTap}>
      {isLiked && <view className="circle" />}
      {isLiked && <view className="circle circleAfter" />}
      <image className="heart-love" src={isLiked ? redHeart : whiteHeart} />
    </view>
  )
}