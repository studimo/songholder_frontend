import TimelineCardDetail from './components/TimelineCardDetail'
import TimelineDateCard from './components/TimelineDateCard'
import { TimelineCardContainer } from './styled'
import { TimelineCardProps } from './types'

export default function TimelineCard(props: TimelineCardProps) {
  const { date, title, desc } = props
  return (
    <TimelineCardContainer>
      <TimelineDateCard date={date} />
      <TimelineCardDetail title={title} desc={desc} />
    </TimelineCardContainer>
  )
}
