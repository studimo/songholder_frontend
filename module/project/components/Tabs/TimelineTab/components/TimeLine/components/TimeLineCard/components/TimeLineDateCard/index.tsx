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
  const { date } = props
  return (
    <TimelineDateCardContainer>
      <CircleDate>
        <DayDateText>{date.getDate()}</DayDateText>
        <MonthDateText>{monthSymbolThai[date.getMonth()]}</MonthDateText>
      </CircleDate>
      <LineDate />
    </TimelineDateCardContainer>
  )
}
