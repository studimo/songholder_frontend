import Profile from 'src/module/Profile'
import { useRouter } from 'next/router'
import { useAuth } from 'Providers/FirebaseAuthProvider'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { baseURL } from 'src/common/const/URL'

export default function ProfileTest() {
  const { authUser } = useAuth()
  const [userId, setUserId] = useState(null)
  useEffect(() => {
    async function getUserId() {
      if (authUser) {
        if (authUser) {
          const res = await axios.get(
            `${baseURL}/users/findByUid/${authUser.uid}`,
          )
          setUserId(res.data.userId)
        }
      }
    }
    getUserId()
  }, [authUser])

  return <Profile userId={Number(userId)} editMode={true} />
}
