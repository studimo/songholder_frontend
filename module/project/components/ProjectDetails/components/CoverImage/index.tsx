import Image from 'next/future/image'
import { StyledCoverImage } from './styled'

export default function CoverImage() {
  const css = { width: '100%', height: 'auto' }
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
        // style={{ width: '100%' }}
        // style={{ width: '100%', height: 'auto' }}
        // sizes='100vw'
        // style={css}
        // width={100}
        // height={100}

        // layout='fill'
        // objectFit='cover'
      />
    </StyledCoverImage>
  )
}
