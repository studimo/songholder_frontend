import HeaderTab from '../components/HeaderTab'
import { MusicExperienceTabContainer } from './styled'
import { MusicExperienceTabProps } from './types'

export default function MusicExperienceTab(
  musicExperienceTabProps: MusicExperienceTabProps,
) {
  const { editMode } = musicExperienceTabProps
  return (
    <MusicExperienceTabContainer>
      <HeaderTab
        tabName={'music experience'}
        tabColor={'rgba(142, 95, 171, 1)'}
        href={''}
        editMode={editMode}
      />
      <div
        style={{
          width: 'calc(100vw - 60px)',
          height: '80px',
          backgroundColor: '#F5E5FF',
          borderRadius: '5px',
          marginLeft: '30px',
          marginTop: '10px',
        }}
      />
      <div
        style={{
          width: 'calc(100vw - 60px)',
          height: '80px',
          backgroundColor: '#F5E5FF',
          borderRadius: '5px',
          marginLeft: '30px',
          marginTop: '10px',
        }}
      />
      <div
        style={{
          width: 'calc(100vw - 60px)',
          height: '80px',
          backgroundColor: '#F5E5FF',
          borderRadius: '5px',
          marginLeft: '30px',
          marginTop: '10px',
        }}
      />
      <div
        style={{
          width: 'calc(100vw - 60px)',
          height: '80px',
          backgroundColor: '#F5E5FF',
          borderRadius: '5px',
          marginLeft: '30px',
          marginTop: '10px',
          marginBottom: '30px',
        }}
      />
    </MusicExperienceTabContainer>
  )
}
