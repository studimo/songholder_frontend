import { Box, Stack } from '@mui/material'
import { OrDividerContainer, OrText } from './styled'

export default function OrDivider() {
  return (
    <OrDividerContainer>
      <Box
        sx={{
          width: { xs: '120px', md: '150px' },
          height: '1px',
          background:
            'linear-gradient(270deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)',
        }}
      />
      <OrText>or</OrText>
      <Box
        sx={{
          width: { xs: '120px', md: '150px' },
          height: '1px',
          background:
            'linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)',
        }}
      />
    </OrDividerContainer>
  )
}
