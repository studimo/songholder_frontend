import PictureCard from './components/PictureCards'
import {
  OptionCardContainer,
  PriceOptionCardText,
  TitleOptionCardText,
  DescOptionCardText,
} from './styled'
import { OptionCardProps } from './types'

export default function OptionCard(props: OptionCardProps) {
  const { title, desc, price, pictures } = props
  const descResult = []
  for (let i = 0; i < desc.length; i++) {
    if (desc[i] === '\n') {
      descResult.push(<br key={i} />)
    } else {
      descResult.push(desc[i])
    }
  }
  return (
    <OptionCardContainer>
      <PriceOptionCardText>{price} Baht</PriceOptionCardText>
      <TitleOptionCardText>{title}</TitleOptionCardText>
      <DescOptionCardText>{descResult}</DescOptionCardText>
      <PictureCard pictures={pictures} />
    </OptionCardContainer>
  )
}
