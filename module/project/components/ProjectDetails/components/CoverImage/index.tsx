import Image from 'next/image'
import { StyledCoverImage } from './styled'

export default function CoverImage() {
  return (
    <StyledCoverImage
      sx={{
        height: { xs: '200px', md: '300px' },
      }}
    >
      <Image
        src={'/assets/images/project/projectDetail/coverImage.svg'}
        layout='fill'
        objectFit='cover'
      />
    </StyledCoverImage>
  )
}
