import { IconButton } from '@mui/material'
import { SocialMediaRegisterContainer, StyledArtistImage } from './styled'

import {
  FacebookRounded,
  Twitter,
  ArrowForward,
  Visibility,
  VisibilityOff,
  MailRounded,
} from '@mui/icons-material'
import { SocialmediaRegisterProps } from './types'
import { useAuth } from 'Providers/FirebaseAuthProvider'
import { registerErrorHandle } from '../registerErrorHandle'
import Image from 'next/image'

export default function SocialmediaRegister(props: SocialmediaRegisterProps) {
  const { loading, setLoading, resFromSubmit, setResFromSubmit } = props
  const { signInWithGoogle, signInWithFacebook, signInWithTwitter } = useAuth()
  return (
    <SocialMediaRegisterContainer>
      <IconButton
        onClick={() => {
          async function signInFacebook() {
            try {
              const user = await signInWithFacebook()
              location.href = '/discover'
              setLoading(false)
            } catch (err: any) {
              let errMessage = registerErrorHandle(err.message)
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
              location.href = '/discover'
            } catch (err: any) {
              let errMessage = registerErrorHandle(err.message)
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
    </SocialMediaRegisterContainer>
  )
}
