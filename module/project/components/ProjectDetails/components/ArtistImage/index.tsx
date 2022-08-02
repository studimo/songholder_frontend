import Image from 'next/image'
import {
  ArtistContainer,
  BackgroundArtistImage,
  StyledArtistImage,
} from './styled'

export default function ArtistImage() {
  return (
    <ArtistContainer>
      <StyledArtistImage>
        <Image
          src={'/assets/images/project/projectDetail/artistImage.svg'}
          layout='fill'
          objectFit='cover'
        />
      </StyledArtistImage>
      <BackgroundArtistImage />
    </ArtistContainer>
  )
}
