import { useState } from 'react'
import HeaderButtonTab from '../components/HeaderButtonTab'
import Timeline from './components/Timeline'
import { TabContainer } from './styled'

export default function TimelineTab() {
  const [onOpen, setOnOpen] = useState(false)
  return (
    <TabContainer>
      <HeaderButtonTab
        tabName='แผนการทำงาน'
        onOpen={onOpen}
        setOnOpen={setOnOpen}
      />
      {onOpen ? <Timeline /> : null}
    </TabContainer>
  )
}
