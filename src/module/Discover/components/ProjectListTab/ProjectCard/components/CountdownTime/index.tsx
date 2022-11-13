import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded'
import { TypographyWithFont } from './styled'
interface CountdownTimeProps {
  deadline: Date
}
export default function CountdownTime(props: CountdownTimeProps) {
  const { deadline } = props
  const currentTime = new Date()
  let timeLeft = -1
  if (deadline) {
    const deadLine = new Date(deadline)
    timeLeft = Math.floor(
      (deadLine.getTime() - currentTime.getTime()) / (1000 * 3600 * 24),
    )
  }
  return (
    <div
      style={{
        display: 'flex',
        position: 'absolute',
        left: '100px',
        bottom: '0px',
        padding: '8px',
        alignItems: 'center',
        gap: '4px',
      }}
    >
      <AccessTimeRoundedIcon sx={{ color: '#979797', fontSize: '11px' }} />
      <TypographyWithFont sx={{ color: '#929292' }}>~ Days</TypographyWithFont>
    </div>
  )
}
