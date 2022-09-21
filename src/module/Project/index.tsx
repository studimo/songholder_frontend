import { Divider } from '@mui/material'
import axios from 'axios'
import { useState, useEffect } from 'react'
import ResponsiveAppBar from 'src/common/components/ResponsiveAppBar'
import { baseURL } from 'src/common/const/URL'
import ProjectDetails from './components/ProjectDetails'
import TrackBar from './components/ProjectDetails/TrackBar'
import DescribtionTab from './components/Tabs/DescribtionTab'
import OptionTab from './components/Tabs/OptionTab'
import ProjectInfoTab from './components/Tabs/ProjectInfoTab'
import TimelineTab from './components/Tabs/TimelineTab'
import { initProjectValue } from './const'
import {
  HeaderDetailsContainer,
  RootContainer,
  TabDivider,
  TabsContainer,
} from './styled'
import { ProjectProps } from './types'

export default function Project(projectProps: ProjectProps) {
  const { projectId } = projectProps
  const [project, setProject] = useState(initProjectValue)

  useEffect(() => {
    async function loadProjectData() {
      const res = await axios.get(`${baseURL}/project/${projectId}`)
      setProject(res.data)
      console.log(project)
    }
    if (projectId) loadProjectData()
  }, [projectId])
  return (
    <RootContainer maxWidth={false} disableGutters>
      <ResponsiveAppBar background={'gradient'} page={'DISCOVER'} />
      <HeaderDetailsContainer>
        <ProjectDetails
          name={project.name}
          desc={project.desc}
          coverImageUrl={project.coverImageUrl}
          userPhotoURL={project.owner.Profile.userPhotoURL}
        />
        <TrackBar
          knotDetails={project.projectDetails.knotDetails}
          currentBudget={project.currentBudget}
          targetBudget={project.targetBudget}
        />
      </HeaderDetailsContainer>
      <TabsContainer>
        <ProjectInfoTab
          projectInfo={project.projectDetails.projectInfo}
          artistName={project.owner.Profile.displayName}
        />
        <TabDivider />
        <DescribtionTab toListener={project.projectDetails.toListener} />
        <TabDivider />
        <TimelineTab timelineDatas={project.projectDetails.timelineDatas} />
        <TabDivider />
        <OptionTab options={project.projectDetails.options} />
      </TabsContainer>
    </RootContainer>
  )
}
