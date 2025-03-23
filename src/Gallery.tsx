import LikeImageCard from "./Components/LikeImageCard.jsx";
import type { Picture } from "./Pictures/furnitures/furnituresPictures.jsx";
import { calculateEstimatedSize } from "./utils.js";
export default function Gallery(props: {pictureData: Picture[]}) {
  const {pictureData} = props
  return (
    <view className="gallery-wrapper">
      <list className="list" list-type="waterfall" column-count={2} scroll-orientation="vertical" custom-list-name="list-container">
        {pictureData.map((picture, index) => (
          <list-item estimated-main-axis-size-px={calculateEstimatedSize(picture.width, picture.height)} key={`${index}`} item-key={`${index}`}>
            <LikeImageCard picture={picture} />
          </list-item>
        ))}
      </list>
    </view>
  )
}