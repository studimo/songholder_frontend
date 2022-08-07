import { Container, Divider } from '@mui/material'
import { styled } from '@mui/system'

export const RootContainer = styled(Container)(() => ({
  // paddingTop: "80px",
  backgroundImage:
    'linear-gradient(111.53deg, rgba(35, 186, 186, 0.7) 20.73%, rgba(77, 36, 147, 0.7) 87.16%),url(/assets/images/landingPage/LandingPageBackground_1.jpeg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center 100%',
  // backdropFilter: "blur(8px)",
  // filter: "blur(5px)",
  width: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  overflow: 'hidden',
}))
