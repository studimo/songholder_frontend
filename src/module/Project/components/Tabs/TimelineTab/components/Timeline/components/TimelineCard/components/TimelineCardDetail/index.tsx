import {
  DescTimelineText,
  TimelineCardDetailContainer,
  TitleTimelineText,
} from './styled'
import { TimelineCardDetailProps } from './types'

export default function TimelineCardDetail(props: TimelineCardDetailProps) {
  const { title, desc, isFirstOrLast } = props
  const isFirstOrLastBoolean =
    isFirstOrLast == 'first' || isFirstOrLast == 'last'
  return (
    <TimelineCardDetailContainer>
      <TitleTimelineText
        sx={{
          color: isFirstOrLastBoolean ? '#335380' : '#227AAB',
        }}
      >
        {title}
      </TitleTimelineText>
      <DescTimelineText
        sx={{
          color: isFirstOrLastBoolean ? '#227AAB' : '#45C1C1',
        }}
      >
        {desc}
      </DescTimelineText>
    </TimelineCardDetailContainer>
  )
}
