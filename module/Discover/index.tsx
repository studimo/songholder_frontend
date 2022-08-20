import ResponsiveAppBar from 'module/components/ResponsiveAppBar'
import AdsBanner from './components/AdsBanner'
import ProjectListTab from './components/ProjectListTab'
import RecommendedTab from './components/RecommendedTab'
import { RootContainer } from './styled'

export default function Discover() {
  return (
    <RootContainer maxWidth={false} disableGutters>
      <ResponsiveAppBar background={'gradient'} page={'DISCOVER'} />
      <AdsBanner />
      <RecommendedTab />
      <ProjectListTab />
    </RootContainer>
  )
}
