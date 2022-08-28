import HeaderTab from '../components/HeaderTab'
import { MusicPersonalityTabContainer } from './styled'
import { MusicPersonalityTabProps } from './types'

export default function MusicPersonalityTab(
  musicPersonalityTabProps: MusicPersonalityTabProps,
) {
  const { editMode } = musicPersonalityTabProps
  return (
    <MusicPersonalityTabContainer>
      <HeaderTab
        tabName={'music personality'}
        tabColor={'rgba(51, 83, 128, 1)'}
        href={''}
        editMode={editMode}
      />
      <div
        style={{
          width: 'calc(100vw - 60px)',
          height: '180px',
          backgroundColor: '#DEF3FF',
          borderRadius: '5px',
          marginLeft: '30px',
          marginTop: '10px',
        }}
      />
    </MusicPersonalityTabContainer>
  )
}
