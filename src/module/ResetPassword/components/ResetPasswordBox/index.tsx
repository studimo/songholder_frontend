import { useState } from 'react'
import ResetPasswordEmail from './components/ResetPasswordEmail'
import { PasswordResetBoxContainer, TypographyWithFont } from './styled'

export default function PasswordResetBox() {
  const [loading, setLoading] = useState(false)
  const [resFromSubmit, setResFromSubmit] = useState('')
  return (
    <PasswordResetBoxContainer
      sx={{
        width: { xs: '320px', md: '400px' },
      }}
    >
      <TypographyWithFont
        sx={{
          m: '12px',
        }}
      >
        Password Reset
      </TypographyWithFont>
      <ResetPasswordEmail
        loading={loading}
        setLoading={setLoading}
        resFromSubmit={resFromSubmit}
        setResFromSubmit={setResFromSubmit}
      />
    </PasswordResetBoxContainer>
  )
}
