import Image from 'next/image'
import { PictureCardArea, PictureContainer, StyledPicture } from './styled'
import { PictureCardsProps } from './types'

export default function PictureCard(props: PictureCardsProps) {
  const { pictures } = props
  return (
    <PictureCardArea>
      <PictureContainer sx={{ width: `${pictures.length * 120}px` }}>
        {pictures.map((picture, i) => (
          <StyledPicture key={picture + i}>
            <Image
              src={`https://res.cloudinary.com/demo/image/fetch/${picture}`}
              layout='fill'
              // objectFit='contain'
              objectFit='cover'
            />
          </StyledPicture>
        ))}
      </PictureContainer>
    </PictureCardArea>
  )
}
