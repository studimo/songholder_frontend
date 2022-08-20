import Footer from 'module/components/Footer'
import ResponsiveAppBar from 'module/components/ResponsiveAppBar'
import BackgroundImage from './components/BackgroundImage'
import ProfileDetails from './components/ProfileDetails'
import ProfileImage from './components/ProfileImage'
import { RootContainer } from './styled'

export default function Profile() {
  return (
    <RootContainer maxWidth={false} disableGutters>
      <ResponsiveAppBar background={'gradient'} page={'DISCOVER'} />
      <BackgroundImage />
      <ProfileImage />
      <ProfileDetails />
      <Footer />
    </RootContainer>
  )
}
