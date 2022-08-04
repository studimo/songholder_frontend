import { monthSymbolThai } from './const'
import {
  CircleDate,
  DayDateText,
  LineDate,
  MonthDateText,
  TimelineDateCardContainer,
} from './styled'
import { TimeLineDateCardProps } from './types'

export default function TimelineDateCard(props: TimeLineDateCardProps) {
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
