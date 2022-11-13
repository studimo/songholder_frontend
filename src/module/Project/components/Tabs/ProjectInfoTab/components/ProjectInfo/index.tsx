import ProjectInfoDataShow from './components/ProjectInfoDataShow'
import { ProjectInfoContainer } from './styled'
import { motion } from 'framer-motion'
import { ProjectInfoProps } from './types'

export default function ProjectInfo(projectInfoProps: ProjectInfoProps) {
  const { projectInfo, artistName } = projectInfoProps
  const date = new Date(projectInfo.deadLine)
  const projectDetails = [
    { title: 'ศิลปิน', data: artistName },
    { title: 'ประเภท', data: projectInfo.type },
    {
      title: 'วันสิ้นสุดการระดมทุน',
      data: `${date.toLocaleDateString()}`,
    },
    { title: 'สถานะ', data: projectInfo.status },
    // { title: 'ผู้รับผิดชอบ', data: projectInfo.responsiblePerson },
    // { title: 'อื่นๆ', data: projectInfo.other },
  ]
  return (
    <motion.div
      initial={{ opacity: -2, y: '-80%' }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <ProjectInfoContainer>
        {projectDetails.map(projectDetail => (
          <ProjectInfoDataShow
            key={projectDetail.title}
            title={projectDetail.title}
            data={projectDetail.data}
          />
        ))}
      </ProjectInfoContainer>
    </motion.div>
  )
}
