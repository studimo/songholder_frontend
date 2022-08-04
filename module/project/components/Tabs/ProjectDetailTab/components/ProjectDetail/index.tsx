import ProjectDetailDataShow from './components/ProjectDetailDataShow'
import { ProjectDetailsContainer } from './styled'
import { motion } from 'framer-motion'

export default function ProjectDetail() {
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
      <ProjectDetailsContainer>
        {projectDetails.map(projectDetail => (
          <ProjectDetailDataShow
            key={projectDetail.title}
            title={projectDetail.title}
            data={projectDetail.data}
          />
        ))}
      </ProjectDetailsContainer>
    </motion.div>
  )
}
