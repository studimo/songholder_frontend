import axios from 'axios'
import Footer from 'src/common/components/Footer'
import ResponsiveAppBar from 'src/common/components/ResponsiveAppBar'
import { useEffect, useState } from 'react'
import BackgroundImage from './components/BackgroundImage'
import ProfileDetails from './components/ProfileDetails'
import ProfileImage from './components/ProfileImage'
import { RootContainer } from './styled'
import { ProfileProps } from './types'
import { useAuth } from 'Providers/FirebaseAuthProvider'
import { baseURL } from 'src/common/const/URL'
import { initUserValue } from './const'

export default function Profile(profileProps: ProfileProps) {
  const { userId, editMode } = profileProps
  const { authUser, loading } = useAuth()
  const [user, setUser] = useState(initUserValue)

  useEffect(() => {
    async function loadUserData() {
      const res = await axios.get(`${baseURL}/users/${userId}`)
      if (authUser)
        setUser({
          ...res.data,
        })
    }
    if (userId) loadUserData()
  }, [userId, authUser])
  return (
    <RootContainer maxWidth={false} disableGutters>
      <ResponsiveAppBar background={'gradient'} page={'DISCOVER'} />
      <BackgroundImage
        editMode={editMode}
        backgroundPhotoURL={user.Profile.backgroundPhotoURL}
      />
      <ProfileImage
        editMode={editMode}
        userPhotoURL={user.Profile.userPhotoURL}
      />
      <ProfileDetails editMode={editMode} user={user} />
      <Footer />
    </RootContainer>
  )
}
