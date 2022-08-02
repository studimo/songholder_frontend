import Image from 'next/image'
import { ProjectDetailContainer, StyledImage } from './styled'

export default function ProjectDetail() {
  return (
    <ProjectDetailContainer>
      <StyledImage>
        <Image
          src={'/assets/images/project/coverImage.svg'}
          layout='fill'
          objectFit='cover'
        />
      </StyledImage>
    </ProjectDetailContainer>
  )
}
