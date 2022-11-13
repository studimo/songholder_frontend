import CountdownTime from './components/CountdownTime'
import ProjectCardDetail from './components/ProjectCardDetail'
import ProjectImageCover from './components/ProjectImageCover'
import { ProjectMainCard, TypographyWithGradientFont } from './styled'
import { ProjectCardProps } from './types'

export default function ProjectCard(projectCardProps: ProjectCardProps) {
  const { project, playerControl } = projectCardProps
  const percent = Math.round(
    (project.currentBudget / project.targetBudget) * 1000,
  )
  return (
    <ProjectMainCard>
      <ProjectImageCover
        name={project.name}
        youtubeId={project.song.youtubeId}
        playerControl={playerControl}
      />
      <ProjectCardDetail
        name={project.name}
        desc={project.desc}
        disPlayName={project.song.artist.Profile.displayName}
        projectId={project.projectId}
      />
      <CountdownTime deadline={project.projectDetails?.projectInfo.deadLine} />
      <TypographyWithGradientFont>
        {percent / 10}% funded
      </TypographyWithGradientFont>
    </ProjectMainCard>
  )
}
