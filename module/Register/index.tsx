import BelowRegisternBox from './components/BelowRegisterBox'
import RegisterBox from './components/RegisterBox'
import { RootContainer } from './styled'

export default function Register() {
  return (
    <RootContainer maxWidth={false} disableGutters>
      <RegisterBox />
      <BelowRegisternBox />
    </RootContainer>
  )
}
