import axios from 'axios'
import Footer from 'module/components/Footer'
import ResponsiveAppBar from 'module/components/ResponsiveAppBar'
import { useEffect, useState } from 'react'
import BackgroundImage from './components/BackgroundImage'
import ProfileDetails from './components/ProfileDetails'
import ProfileImage from './components/ProfileImage'
import { RootContainer } from './styled'
import { ProfileProps } from './types'
const baseURL = process.env.NEXT_PUBLIC_REST_API_ENDPOINT
import { useAuth } from 'Providers/FirebaseAuthProvider'

export default function Profile(profileProps: ProfileProps) {
  const { userId } = profileProps
  const [editMode, setEditMode] = useState(false)
  const { authUser, loading } = useAuth()
  const [user, setUser] = useState({
    userId: 0,
    role: '',
    email: '',
    desc: '',
    displayName: '',
    userPhotoURL: '',
    backgroundPhotoURL: '',
  })

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
        backgroundPhotoURL={user.backgroundPhotoURL}
      />
      <ProfileImage editMode={editMode} userPhotoURL={user.userPhotoURL} />
      <ProfileDetails editMode={editMode} user={user} />
      <Footer />
    </RootContainer>
  )
}
