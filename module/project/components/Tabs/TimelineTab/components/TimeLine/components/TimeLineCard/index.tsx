import { Typography } from '@mui/material'
import TimelineDateCard from './components/TimeLineDateCard'
import { TimeLineCardContainer } from './styled'
import { TimeLineCardProps } from './types'

export default function TimeLineCard(props: TimeLineCardProps) {
  const { date, title, desc } = props
  return (
    <TimeLineCardContainer>
      <TimelineDateCard date={date} />
    </TimeLineCardContainer>
  )
}
