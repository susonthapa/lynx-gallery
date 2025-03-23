import LikeImageCard from "../Components/LikeImageCard.jsx"
import { furnituresPictures } from "../Pictures/furnitures/furnituresPictures.jsx"

function FirstImageCard() {
  const MyFirstPicture = furnituresPictures[0]
  return (
    <view className="gallery-wrapper single-card">
      <LikeImageCard picture={MyFirstPicture} />
    </view>
  )
}

export default FirstImageCard
