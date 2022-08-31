import { useState } from 'react'
import HeaderButtonTab from '../components/HeaderButtonTab'
import ProjectInfo from './components/ProjectInfo'
import { TabContainer } from './styled'

export default function ProjectInfoTab() {
  const [onOpen, setOnOpen] = useState(false)
  return (
    <TabContainer>
      <HeaderButtonTab
        tabName='รายละเอียดproject'
        onOpen={onOpen}
        setOnOpen={setOnOpen}
      />
      {onOpen ? <ProjectInfo /> : null}
    </TabContainer>
  )
}
