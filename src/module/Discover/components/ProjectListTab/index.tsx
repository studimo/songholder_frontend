import { Carousel } from '@mantine/carousel'
import { Grid } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { recommendedProject } from 'src/common/mocks/recommendedProject'
import ProjectCard from './ProjectCard'
import { ProjectListTabContainer, ProjectListText } from './styled'
import { ProjectListTabProps } from './types'
const baseURL = process.env.NEXT_PUBLIC_REST_API_ENDPOINT

export default function ProjectListTab(
  projectListTabProps: ProjectListTabProps,
) {
  const { playerControl } = projectListTabProps
  const [projectList, setProjectList] = useState([
    {
      projectId: 1,
      name: 'string',
      desc: 'string',
      currentBudget: 0,
      targetBudget: 1000,
      song: {
        youtubeId: 'kxs9Su_mbpU',
        artist: {
          Profile: {
            displayName: 'string',
          },
        },
      },
      projectDetails: {
        projectInfo: {
          deadLine: new Date(),
        },
      },
    },
  ])

  useEffect(() => {
    async function getProjectList() {
      const { data } = await axios.get(`${baseURL}/project/discover`)
      setProjectList(data)
      console.log(data)
    }
    getProjectList()
  }, [])

  return (
    <ProjectListTabContainer
      sx={{
        padding: { xs: '0px 16px', md: '0px 100px', lg: '0px 130px' },
      }}
    >
      <ProjectListText>PROJECTS LIST</ProjectListText>
      <Grid container spacing={2}>
        {projectList.map((project, index) => (
          <Grid item xs={12} sm={6} lg={4} key={project.name + index}>
            <ProjectCard project={project} playerControl={playerControl} />
          </Grid>
        ))}
      </Grid>
    </ProjectListTabContainer>
  )
}
