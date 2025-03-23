import { type Picture } from "../Pictures/furnitures/furnituresPictures.jsx";
import LikeIcon from "./LikeIcon.jsx";
import "../index.scss";



export default function LikeImageCard(props: {picture: Picture}) {
  const {picture} = props
  return (
    <view className="picture-wrapper">
      <image style={{width: "100%", aspectRatio: picture.width / picture.height}} src={picture.src} />
      <LikeIcon />
      <text style={{fontSize: 16, fontWeight: "bold", color: "white"}}>Hello WOrld <text style={{color: "red"}}>Nested text</text></text>
    </view>
  )
}