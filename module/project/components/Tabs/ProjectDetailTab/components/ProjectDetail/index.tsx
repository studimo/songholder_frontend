import { Typography } from '@mui/material'
import ProjectDetailDataShow from './components/ProjectDetailDataShow'
import { ProjectDetailsContainer } from './styled'

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
    <ProjectDetailsContainer>
      {projectDetails.map(projectDetail => (
        <ProjectDetailDataShow
          key={projectDetail.title}
          title={projectDetail.title}
          data={projectDetail.data}
        />
      ))}
    </ProjectDetailsContainer>
  )
}
