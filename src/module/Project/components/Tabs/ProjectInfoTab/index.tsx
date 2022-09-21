import { useState } from 'react'
import HeaderButtonTab from '../components/HeaderButtonTab'
import ProjectInfo from './components/ProjectInfo'
import { TabContainer } from './styled'
import { ProjectInfoTabProps } from './types'

export default function ProjectInfoTab(
  projectInfoTabProps: ProjectInfoTabProps,
) {
  const { projectInfo, artistName } = projectInfoTabProps
  const [onOpen, setOnOpen] = useState(false)
  return (
    <TabContainer>
      <HeaderButtonTab
        tabName='รายละเอียดproject'
        onOpen={onOpen}
        setOnOpen={setOnOpen}
      />
      {onOpen ? (
        <ProjectInfo projectInfo={projectInfo} artistName={artistName} />
      ) : null}
    </TabContainer>
  )
}
