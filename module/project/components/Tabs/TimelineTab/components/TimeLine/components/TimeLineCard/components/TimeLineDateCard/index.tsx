import { monthSymbolThai } from './const'
import {
  CircleDate,
  DayDateText,
  LineDate,
  MonthDateText,
  TimelineDateCardContainer,
} from './styled'
import { TimelineDateCardProps } from './types'

export default function TimelineDateCard(props: TimelineDateCardProps) {
  const { date, isFirstOrLast } = props
  const isFirstOrLastBoolean =
    isFirstOrLast == 'first' || isFirstOrLast == 'last'
  return (
    <TimelineDateCardContainer>
      <CircleDate
        sx={{
          // border: '2px solid #227AAB',
          border: isFirstOrLastBoolean
            ? '2px solid #227AAB'
            : '2px solid #45C1C1',
        }}
      >
        <DayDateText
          sx={{
            color: isFirstOrLastBoolean ? '#335380' : '#227AAB',
          }}
        >
          {date.getDate()}
        </DayDateText>
        <MonthDateText
          sx={{
            color: isFirstOrLastBoolean ? '#335380' : '#227AAB',
          }}
        >
          {monthSymbolThai[date.getMonth()]}
        </MonthDateText>
      </CircleDate>
      {isFirstOrLast === 'last' ? null : <LineDate />}
    </TimelineDateCardContainer>
  )
}
