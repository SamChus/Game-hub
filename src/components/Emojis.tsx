import { Box, Image, ImageProps } from '@chakra-ui/react'
import BullsEye from "../assets/bulls-eye.webp"
import ThumbsUp from "../assets/thumbs-up.webp"
import Meh from "../assets/meh.webp"

interface Props {
    rating: number
}

const Emojis = ({rating}:Props) => {
    if (rating < 3) return null
    const emojiMap: { [key: number]: ImageProps } = {
      3: { src: Meh, alt: "meh", boxSize: "25px" },
      4: { src: ThumbsUp, alt: "recommended", boxSize: "25px" },
      5: { src: BullsEye, alt: "exceptional", boxSize: "35px" },
    };
  return (
    <Image {...emojiMap[rating]} marginTop={1}/>
  )
}

export default Emojis