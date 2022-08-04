import { Typography } from '@mui/material'
import {
  DescTimelineText,
  TimelineCardDetailContainer,
  TitleTimelineText,
} from './styled'
import { TimelineCardDetailProps } from './types'

export default function TimelineCardDetail(props: TimelineCardDetailProps) {
  const { title, desc } = props
  return (
    <TimelineCardDetailContainer>
      <TitleTimelineText>{title}</TitleTimelineText>
      <DescTimelineText>{desc}</DescTimelineText>
    </TimelineCardDetailContainer>
  )
}
