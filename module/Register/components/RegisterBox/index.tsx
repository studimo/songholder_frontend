import { Box, Stack } from '@mui/material'
import { useState } from 'react'
import EmailPasswordRegister from './components/EmailPasswordRegister'
import OrDivider from './components/OrDivider'
import SocialmediaRegister from './components/SocialmediaRegister'
import { RegisterBoxContainer, TypographyWithFont } from './styled'

export default function RegisterBox() {
  const [loading, setLoading] = useState(false)
  const [resFromSubmit, setResFromSubmit] = useState('')
  return (
    <RegisterBoxContainer
      sx={{
        width: { xs: '320px', md: '400px' },
      }}
    >
      <TypographyWithFont
        sx={{
          m: '12px',
        }}
      >
        REGISTER
      </TypographyWithFont>
      <EmailPasswordRegister
        loading={loading}
        setLoading={setLoading}
        resFromSubmit={resFromSubmit}
        setResFromSubmit={setResFromSubmit}
      />
      <OrDivider />
      <SocialmediaRegister
        loading={loading}
        setLoading={setLoading}
        resFromSubmit={resFromSubmit}
        setResFromSubmit={setResFromSubmit}
      />
    </RegisterBoxContainer>
  )
}
