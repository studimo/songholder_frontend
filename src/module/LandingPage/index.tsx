import Footer from 'src/common/components/Footer'
import ResponsiveAppBar from 'src/common/components/ResponsiveAppBar'
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
