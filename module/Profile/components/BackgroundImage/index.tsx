import Image from 'next/future/image'
import { StyledCoverImage } from './styled'

export default function BackgroundImage() {
  return (
    <StyledCoverImage
      sx={{
        height: { xs: '200px', md: '300px' },
      }}
    >
      <Image
        src={'/assets/images/project/projectDetail/coverImage.svg'}
        fill
        style={{ objectFit: 'cover' }}
      />
    </StyledCoverImage>
  )
}
