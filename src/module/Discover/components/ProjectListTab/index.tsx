import { Carousel } from '@mantine/carousel'
import { Grid } from '@mui/material'
import { projectList } from 'src/common/mocks/projectList'
import { recommendedProject } from 'src/common/mocks/recommendedProject'
import ProjectCard from './ProjectCard'
import { ProjectListTabContainer, ProjectListText } from './styled'

export default function ProjectListTab() {
  return (
    <ProjectListTabContainer
      sx={{
        padding: { xs: '0px 30px', md: '0px 60px' },
      }}
    >
      <ProjectListText>PROJECTS LIST</ProjectListText>
      <Grid container spacing={2}>
        {projectList.map((project, index) => (
          <Grid item xs={12} sm={6} lg={4} key={project.name + index}>
            <ProjectCard />
          </Grid>
        ))}
      </Grid>
    </ProjectListTabContainer>
  )
}
