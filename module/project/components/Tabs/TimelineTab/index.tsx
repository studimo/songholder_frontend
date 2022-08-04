import { useState } from 'react'
import HeaderButtonTab from '../components/HeaderButtonTab'
import TimeLine from './components/TimeLine'
import { TabContainer } from './styled'

export default function TimeLineTab() {
  const [onOpen, setOnOpen] = useState(false)
  return (
    <TabContainer>
      <HeaderButtonTab
        tabName='แผนการทำงาน'
        onOpen={onOpen}
        setOnOpen={setOnOpen}
      />
      {onOpen ? <TimeLine /> : null}
    </TabContainer>
  )
}
