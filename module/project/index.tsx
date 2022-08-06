import { Divider } from '@mui/material'
import ResponsiveAppBar from 'components/Layout/Appbar/ResponsiveAppBar'
import ProjectDetails from './components/ProjectDetails'
import TrackBar from './components/ProjectDetails/TrackBar'
import DescribtionTab from './components/Tabs/DescribtionTab'
import OptionTab from './components/Tabs/OptionTab'
import ProjectInfoTab from './components/Tabs/ProjectInfoTab'
import TimelineTab from './components/Tabs/TimelineTab'
import {
  HeaderDetailsContainer,
  RootContainer,
  TabDivider,
  TabsContainer,
} from './styled'

export default function Project() {
  return (
    <RootContainer maxWidth={false} disableGutters>
      <ResponsiveAppBar background={'gradient'} page={'DISCOVER'} />
      <HeaderDetailsContainer>
        <ProjectDetails />
        <TrackBar />
      </HeaderDetailsContainer>
      <TabsContainer>
        <ProjectInfoTab />
        <TabDivider />
        <DescribtionTab />
        <TabDivider />
        <TimelineTab />
        <TabDivider />
        <OptionTab />
      </TabsContainer>
    </RootContainer>
  )
}
