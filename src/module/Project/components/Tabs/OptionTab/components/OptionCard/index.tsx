import PictureCard from './components/PictureCards'
import { colorPalette } from './const'
import {
  OptionCardContainer,
  PriceOptionCardText,
  TitleOptionCardText,
  DescOptionCardText,
} from './styled'
import { OptionCardProps } from './types'

export default function OptionCard(props: OptionCardProps) {
  const { title, desc, price, descPrice, pictures, inx } = props
  const inxColor = inx % colorPalette.length
  const descResult = []
  for (let i = 0; i < desc.length; i++) {
    if (desc[i] === '\n') {
      descResult.push(<br key={i} />)
    } else {
      descResult.push(desc[i])
    }
  }
  return (
    <OptionCardContainer
      sx={{
        background: colorPalette[inxColor].backgroundColor,
        border: `2px solid ${colorPalette[inxColor].borderColor}`,
      }}
    >
      <PriceOptionCardText
        sx={{
          color: colorPalette[inxColor].priceColor,
        }}
      >
        {price} Baht
      </PriceOptionCardText>
      <PriceOptionCardText
        sx={{
          fontSize: '10px',
          top: '23px',
          color: colorPalette[inxColor].priceColor,
        }}
      >
        {descPrice}
      </PriceOptionCardText>
      <TitleOptionCardText
        sx={{
          color: colorPalette[inxColor].textColor,
        }}
      >
        {title}
      </TitleOptionCardText>
      <DescOptionCardText
        sx={{
          color: colorPalette[inxColor].textColor,
        }}
      >
        {descResult}
      </DescOptionCardText>
      <PictureCard pictures={pictures} />
    </OptionCardContainer>
  )
}
