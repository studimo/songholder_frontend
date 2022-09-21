import { useState } from 'react'
import HeaderButtonTab from '../components/HeaderButtonTab'
import Timeline from './components/Timeline'
import { TabContainer } from './styled'
import { TimelineTabProps } from './types'

export default function TimelineTab(timelineTabProps: TimelineTabProps) {
  const { timelineDatas } = timelineTabProps
  const [onOpen, setOnOpen] = useState(false)
  return (
    <TabContainer>
      <HeaderButtonTab
        tabName='แผนการทำงาน'
        onOpen={onOpen}
        setOnOpen={setOnOpen}
      />
      {onOpen ? <Timeline timelineDatas={timelineDatas} /> : null}
    </TabContainer>
  )
}
