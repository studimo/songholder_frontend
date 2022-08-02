import ResponsiveAppBar from 'components/Layout/Appbar/ResponsiveAppBar'
import ProjectDetail from './ProjectDetails'
import { RootContainer } from './styled'

export default function Project() {
  return (
    <RootContainer maxWidth={false} disableGutters>
      <ResponsiveAppBar background={'gradient'} page={'PROJECT'} />
      <ProjectDetail />
    </RootContainer>
  )
}
