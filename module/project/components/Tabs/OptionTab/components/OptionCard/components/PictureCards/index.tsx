import Image from 'next/future/image'
import { PictureCardArea, PictureContainer, StyledPicture } from './styled'
import { PictureCardsProps } from './types'

export default function PictureCard(props: PictureCardsProps) {
  const { pictures } = props
  const css = { width: '100%', height: 'auto' }
  return (
    <PictureCardArea>
      <PictureContainer sx={{ width: `${pictures.length * 120}px` }}>
        {pictures.map((picture, i) => (
          <StyledPicture key={picture + i}>
            <Image
              src={`https://res.cloudinary.com/demo/image/fetch/${picture}`}
              fill
              // layout='fill'
              // // objectFit='contain'
              // objectFit='cover'
            />
          </StyledPicture>
        ))}
      </PictureContainer>
    </PictureCardArea>
  )
}
