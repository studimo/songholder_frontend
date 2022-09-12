import Footer from 'src/common/components/Footer'
import ResponsiveAppBar from 'src/common/components/ResponsiveAppBar'
import FifthParagraph from './components/FifthParagraph'
import FirstParagraph from './components/FirstParagraph'
import FourthParagraph from './components/FourthParagraph'
import SecondParagraph from './components/SecondParagraph'
import ThirdParagraph from './components/ThirdParagraph'
import { RootContainer } from './styled'
export default function LandingPageEng() {
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
