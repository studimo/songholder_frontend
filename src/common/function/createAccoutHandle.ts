import axios from 'axios'
import { baseURL } from '../const/URL'

async function userExists(uid: string) {
  const res = await axios.get(`${baseURL}/users/findByUid/${uid}`)
  return res.data
}
async function createNewUser(user: {
  displayName: 'master nonnolnw'
  email: 'masternonnolnw@gmail.com'
  photoURL: 'https://lh3.googleusercontent.com/a/ALm5wu0YM0BgvGKIGevQBrvToftvQwisdHmv9gBnzc6q=s96-c'
  uid: 'fczEft4jVoOPJqNCzn5mNLIMsar1'
}) {
  console.log('user')
  console.log(user)
  const res = await axios.post(`${baseURL}/users`, {
    email: user.email,
    firebaseId: user.uid,
    Profile: {
      desc: 'This is new account',
      displayName: user.displayName || user.email,
      userPhotoURL: user.photoURL,
    },
  })
  console.log(res)
  return res
}
export const createAccountHandle = async (res: any) => {
  try {
    const userCheck = await userExists(res.user.uid)
    if (!userCheck) {
      createNewUser(res.user)
    }
    location.href = '/discover'
  } catch (e: any) {
    console.log(e.message)
  }
}
