import { IconButton } from '@mui/material'
import { SocialMediaSigninContainer, StyledArtistImage } from './styled'

import {
  FacebookRounded,
  Twitter,
  ArrowForward,
  Visibility,
  VisibilityOff,
  MailRounded,
} from '@mui/icons-material'
import { SocialmediaSigninProps } from './types'
import { useAuth } from 'Providers/FirebaseAuthProvider'
import { SignInErrorHandle } from '../ErrorLoginHandle'
import Image from 'next/image'
import { createAccountHandle } from 'src/common/function/createAccoutHandle'

export default function SocialmediaSignin(props: SocialmediaSigninProps) {
  const { loading, setLoading, resFromSubmit, setResFromSubmit } = props
  const { signInWithGoogle, signInWithFacebook, signInWithTwitter } = useAuth()
  return (
    <SocialMediaSigninContainer>
      <IconButton
        onClick={() => {
          async function signInFacebook() {
            try {
              const user = await signInWithFacebook()
              createAccountHandle(user)
              setLoading(false)
            } catch (err: any) {
              let errMessage = SignInErrorHandle(err.message)
              errMessage = errMessage ? errMessage : 'Unknown error'
              setLoading(false)
              setResFromSubmit(errMessage)
            }
          }
          signInFacebook()
        }}
      >
        <FacebookRounded sx={{ color: 'white', fontSize: '20px' }} />
      </IconButton>
      {/* <IconButton
        onClick={() => {
          async function signInTwitter() {
            try {
              const user = await signInWithTwitter()
              setLoading(false)
              location.href = '/discover'
            } catch (err: any) {
              let errMessage = SignInErrorHandle(err.message)
              errMessage = errMessage ? errMessage : 'Unknown error'
              setLoading(false)
              setResFromSubmit(errMessage)
            }
          }
          signInTwitter()
        }}
      >
        <Twitter sx={{ color: 'white', fontSize: '20px' }} />
      </IconButton> */}
      <IconButton
        onClick={() => {
          async function signInGoogle() {
            try {
              const user = await signInWithGoogle()
              setLoading(false)
              createAccountHandle(user)
            } catch (err: any) {
              let errMessage = SignInErrorHandle(err.message)
              errMessage = errMessage ? errMessage : 'Unknown error'
              setLoading(false)
              setResFromSubmit(errMessage)
            }
          }
          signInGoogle()
        }}
      >
        <StyledArtistImage>
          <Image
            src={'/assets/images/logo/googleLogo.svg'}
            layout='fill'
            objectFit='cover'
          />
        </StyledArtistImage>
      </IconButton>
    </SocialMediaSigninContainer>
  )
}
