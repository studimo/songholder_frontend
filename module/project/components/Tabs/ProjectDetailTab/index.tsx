import { useState } from 'react'
import HeaderButtonTab from '../components/HeaderButtonTab'
import ProjectDetail from './components/ProjectDetail'
import { TabContainer } from './styled'

export default function ProjectDetailTab() {
  const [onOpen, setOnOpen] = useState(false)
  return (
    <TabContainer>
      <HeaderButtonTab
        tabName='รายละเอียดproject'
        onOpen={onOpen}
        setOnOpen={setOnOpen}
      />
      {onOpen ? <ProjectDetail /> : null}
    </TabContainer>
  )
}
