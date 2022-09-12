import Footer from 'src/common/components/Footer'
import ResponsiveAppBar from 'src/common/components/ResponsiveAppBar'
import AdsBannerTab from './components/AdsBannerTab'
import ProjectListTab from './components/ProjectListTab'
import RecommendedTab from './components/RecommendedTab'
import { RootContainer } from './styled'

export default function Discover() {
  return (
    <RootContainer maxWidth={false} disableGutters>
      <ResponsiveAppBar background={'gradient'} page={'DISCOVER'} />
      <AdsBannerTab />
      <RecommendedTab />
      <ProjectListTab />
      <Footer />
    </RootContainer>
  )
}
