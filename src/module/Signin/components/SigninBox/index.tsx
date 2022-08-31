import { Box, Stack } from '@mui/material'
import { useState } from 'react'
import EmailPasswordSignin from './components/EmailPasswordSignin'
import OrDivider from './components/OrDivider'
import SocialmediaSignin from './components/SocialmediaSignin'
import { SigninBoxContainer, TypographyWithFont } from './styled'

export default function SigninBox() {
  const [loading, setLoading] = useState(false)
  const [resFromSubmit, setResFromSubmit] = useState('')
  return (
    <SigninBoxContainer
      sx={{
        width: { xs: '320px', md: '400px' },
      }}
    >
      <TypographyWithFont
        sx={{
          m: '12px',
        }}
      >
        SIGN IN
      </TypographyWithFont>
      <EmailPasswordSignin
        loading={loading}
        setLoading={setLoading}
        resFromSubmit={resFromSubmit}
        setResFromSubmit={setResFromSubmit}
      />
      <OrDivider />
      <SocialmediaSignin
        loading={loading}
        setLoading={setLoading}
        resFromSubmit={resFromSubmit}
        setResFromSubmit={setResFromSubmit}
      />
    </SigninBoxContainer>
  )
}
