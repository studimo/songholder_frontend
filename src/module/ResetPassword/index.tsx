import BelowSigninBox from './components/BelowSigninBox'
import PasswordResetBox from './components/ResetPasswordBox'
import { RootContainer } from './styled'

export default function ResetPassword() {
  return (
    <RootContainer maxWidth={false} disableGutters>
      <PasswordResetBox />
      <BelowSigninBox />
    </RootContainer>
  )
}
