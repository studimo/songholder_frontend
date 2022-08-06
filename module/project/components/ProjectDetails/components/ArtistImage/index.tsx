import Image from 'next/future/image'
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
          fill
        />
      </StyledArtistImage>
      <BackgroundArtistImage />
    </ArtistContainer>
  )
}
