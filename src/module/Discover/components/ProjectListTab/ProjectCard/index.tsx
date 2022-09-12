import Image from 'next/future/image'
import { ProjectMainCard } from './styled'

export default function ProjectCard() {
  return (
    <ProjectMainCard>
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          left: '0%',
          width: '100px',
          height: '100%',
          overflow: 'hidden',
          backgroundColor: 'yellowgreen',
        }}
      >
        <Image
          src='/assets/images/project/projectDetail/artistImage.svg'
          alt='Logo_IG'
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
    </ProjectMainCard>
  )
}
