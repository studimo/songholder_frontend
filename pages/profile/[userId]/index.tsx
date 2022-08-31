import Profile from 'src/module/Profile'
import { useRouter } from 'next/router'

export default function ProfileTest() {
  const router = useRouter()
  const { userId } = router.query
  return <Profile userId={Number(userId)} />
}
