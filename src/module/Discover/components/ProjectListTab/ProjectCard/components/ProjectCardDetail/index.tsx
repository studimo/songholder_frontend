import { ProjectCardDetailContainer, TypographyWithFont } from './styled'
import { ProjectCardDetailProps } from './types'

export default function ProjectCardDetail(
  projectCardDetailProps: ProjectCardDetailProps,
) {
  const { name, desc, disPlayName, projectId } = projectCardDetailProps
  return (
    <ProjectCardDetailContainer>
      <TypographyWithFont
        sx={{
          '&:hover': {
            textDecoration: 'underline',
            pointerEvents: 'fill',
          },
        }}
      >
        <a href={`discover/project/${projectId}`}>{name}</a>
      </TypographyWithFont>
      <TypographyWithFont
        sx={{
          fontSize: '9px',
          lineHeight: '10px',
          color: '#929292',
        }}
      >
        {disPlayName}
      </TypographyWithFont>
      <TypographyWithFont
        sx={{
          fontSize: '9px',
          lineHeight: '10px',
          color: '#54729C',
          mt: '3px',
        }}
      >
        {desc}
      </TypographyWithFont>
    </ProjectCardDetailContainer>
  )
}
