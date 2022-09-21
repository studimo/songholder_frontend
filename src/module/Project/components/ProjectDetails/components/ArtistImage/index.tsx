import Image from 'next/future/image'
import {
  ArtistContainer,
  BackgroundArtistImage,
  StyledArtistImage,
} from './styled'
import { ArtistImageProps } from './types'

export default function ArtistImage(artistImageProps: ArtistImageProps) {
  const { userPhotoURL } = artistImageProps
  return (
    <ArtistContainer>
      <StyledArtistImage>
        <Image src={userPhotoURL} fill />
      </StyledArtistImage>
      <BackgroundArtistImage />
    </ArtistContainer>
  )
}
