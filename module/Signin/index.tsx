import BelowSigninBox from './components/BelowSigninBox'
import SigninBox from './components/SigninBox'
import { RootContainer } from './styled'

export default function Signin() {
  return (
    <RootContainer maxWidth={false} disableGutters>
      <SigninBox />
      <BelowSigninBox />
    </RootContainer>
  )
}
