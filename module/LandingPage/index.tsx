import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
} from '@mui/material'
import LandingpageCard from 'components/LandingPage/LandingpageCard'
import Footer from 'components/Layout/Footer/Footer'
import ResponsiveAppBar from 'components/Layout/Appbar/ResponsiveAppBar'
import { RootContainer } from './styled'
import FirstParagraph from './components/FirstParagraph'
import SecondParagraph from './components/SecondParagraph'
import ThirdParagraph from './components/ThirdParagraph'
import FourthParagraph from './components/FourthParagraph'
import FifthParagraph from './components/FifthParagraph'
export default function LandingPage() {
  return (
    <RootContainer maxWidth={false} disableGutters>
      <ResponsiveAppBar background={'auto'} page={'HOME'} />
      <FirstParagraph />
      <SecondParagraph />
      <ThirdParagraph />
      <FourthParagraph />
      <FifthParagraph />
      <Footer />
    </RootContainer>
  )
}
