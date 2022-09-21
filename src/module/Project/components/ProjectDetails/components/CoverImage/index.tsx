import Image from 'next/future/image'
import { StyledCoverImage } from './styled'
import { CoverImageProps } from './types'

export default function CoverImage(coverImageProps: CoverImageProps) {
  const { coverImageUrl } = coverImageProps
  const css = { width: '100%', height: 'auto' }
  return (
    <StyledCoverImage
      sx={{
        height: { xs: '200px', md: '300px' },
      }}
    >
      <Image
        src={coverImageUrl}
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
