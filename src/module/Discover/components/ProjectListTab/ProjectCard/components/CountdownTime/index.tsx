import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded'
import { TypographyWithFont } from './styled'
export default function CountdownTime() {
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
      <TypographyWithFont sx={{ color: '#929292' }}>28 Days</TypographyWithFont>
    </div>
  )
}
