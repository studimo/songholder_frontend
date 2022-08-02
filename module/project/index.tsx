import { Divider } from '@mui/material'
import ResponsiveAppBar from 'components/Layout/Appbar/ResponsiveAppBar'
import ProjectDetails from './components/ProjectDetails'
import TrackBar from './components/ProjectDetails/TrackBar'
import DescribtionTab from './components/Tabs/DescribtionTab'
import ProjectDetailTab from './components/Tabs/ProjectDetailTab'
import { HeaderDetailsContainer, RootContainer, TabsContainer } from './styled'

export default function Project() {
  return (
    <RootContainer maxWidth={false} disableGutters>
      <HeaderDetailsContainer>
        <ResponsiveAppBar background={'gradient'} page={'PROJECT'} />
        <ProjectDetails />
        <TrackBar />
      </HeaderDetailsContainer>
      <TabsContainer>
        <ProjectDetailTab />
        <Divider sx={{ ml: '58px', mr: '50px', color: '#A2B6D2' }} />
        <DescribtionTab />
        <Divider sx={{ ml: '58px', mr: '50px', color: '#A2B6D2' }} />
      </TabsContainer>
    </RootContainer>
  )
}
