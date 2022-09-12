import CountdownTime from './components/CountdownTime'
import ProjectCardDetail from './components/ProjectCardDetail'
import ProjectImageCover from './components/ProjectImageCover'
import { ProjectMainCard, TypographyWithFont } from './styled'

export default function ProjectCard() {
  return (
    <ProjectMainCard>
      <ProjectImageCover />
      <ProjectCardDetail />
      <CountdownTime />
      <TypographyWithFont
        sx={{
          display: 'flex',
          position: 'absolute',
          right: '8px',
          bottom: '0px',
          padding: '8px',
          background: 'linear-gradient(90deg, #927EBC 12.84%, #34A0B8 86.49%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        79% funded
      </TypographyWithFont>
    </ProjectMainCard>
  )
}
