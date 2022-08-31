import ProjectInfoDataShow from './components/ProjectInfoDataShow'
import { ProjectInfoContainer } from './styled'
import { motion } from 'framer-motion'

export default function ProjectInfo() {
  const projectDetails = [
    { title: 'ศิลปิน', data: 'DRG' },
    { title: 'ประเภท', data: 'Single เพลง' },
    { title: 'วันสิ้นสุดการระดมทุน', data: '27/03/2023' },
    { title: 'สถานะ', data: 'Draft' },
    { title: 'ผู้รับผิดชอบ', data: 'บริษัทXXXX' },
    { title: 'อื่นๆ', data: 'demo' },
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
