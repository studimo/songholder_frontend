import { Box, Button, Stack, Typography } from '@mui/material'

import { ArrowForward } from '@mui/icons-material'
import { BelowRegisterBoxContainer, TypographyWithFont } from './styled'
export default function BelowRegisternBox() {
  return (
    <BelowRegisterBoxContainer>
      <Stack
        sx={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          mt: '35px',
          ml: 'auto',
          mr: 'auto',
        }}
      >
        <TypographyWithFont
          sx={{
            color: 'white',
            fontSize: '17px',
            textTransform: 'none',
            mr: '10px',
          }}
        >
          Already have an Account?
        </TypographyWithFont>
        <Button
          onClick={() => (location.href = '/signin')}
          sx={{
            color: 'white',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              // borderColor: "#ffffff",
            },
          }}
        >
          <TypographyWithFont
            sx={{ color: 'white', fontSize: '17px', textTransform: 'none' }}
          >
            Sign in
          </TypographyWithFont>
          <ArrowForward sx={{ fontSize: '15px', ml: '5px' }} />
        </Button>
      </Stack>
      <Stack sx={{ flexDirection: 'row', mt: '10px', ml: 'auto', mr: 'auto' }}>
        <Button
          onClick={() => (location.href = '/discover')}
          sx={{ color: 'white' }}
        >
          <Box
            component='img'
            sx={{
              height: '100px',
              width: '100px',
              // maxHeight: { xs: 233, md: 167 },
              // maxWidth: { xs: 350, md: 250 },
            }}
            alt='LOGO'
            src='./assets/images/logo/logoWithText.png'
          />
        </Button>
      </Stack>
    </BelowRegisterBoxContainer>
  )
}
