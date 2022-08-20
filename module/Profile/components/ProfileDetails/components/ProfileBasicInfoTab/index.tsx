import FollowerAndLike from './components/FollowerAndLike'
import MusicExperienceTab from './components/tab/MusicExperienceTab'
import MusicPersonalityTab from './components/tab/MusicPersonalityTab'
import {
  ProfileBasicInfoTabContainer,
  TypographyWithFontCenter,
} from './styled'

export default function ProfileBasicInfoTab() {
  return (
    <ProfileBasicInfoTabContainer>
      <TypographyWithFontCenter sx={{ fontSize: '22px', fontWeight: 600 }}>
        Army
      </TypographyWithFontCenter>
      <TypographyWithFontCenter
        sx={{ fontSize: '13px', fontWeight: 400, color: '#A278BC' }}
      >
        acoustic is my worlddd {'>'}
      </TypographyWithFontCenter>
      <FollowerAndLike />
      <MusicPersonalityTab />
      <MusicExperienceTab />
    </ProfileBasicInfoTabContainer>
  )
}
