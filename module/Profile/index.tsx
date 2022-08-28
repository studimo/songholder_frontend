import Footer from 'module/components/Footer'
import ResponsiveAppBar from 'module/components/ResponsiveAppBar'
import { useState } from 'react'
import BackgroundImage from './components/BackgroundImage'
import ProfileDetails from './components/ProfileDetails'
import ProfileImage from './components/ProfileImage'
import { RootContainer } from './styled'

export default function Profile() {
  const [editMode, setEditMode] = useState(false)
  return (
    <RootContainer maxWidth={false} disableGutters>
      <ResponsiveAppBar background={'gradient'} page={'DISCOVER'} />
      <BackgroundImage editMode={editMode} />
      <ProfileImage editMode={editMode} />
      <ProfileDetails editMode={editMode} />
      <Footer />
    </RootContainer>
  )
}
