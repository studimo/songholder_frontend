import Image from 'next/future/image'
import FollowerAndLike from './components/FollowerAndLike'
import MusicExperienceTab from '../MusicExperienceTab'
import MusicPersonalityTab from '../MusicPersonalityTab'
import {
  BalanceCenterBox,
  EditIconButton,
  ProfileBasicInfoTabContainer,
  ProfileDescContainer,
  ProfileNameContainer,
  StyledEditIconImage,
  TypographyWithFont,
} from './styled'
import { ProfileBasicInfoTabProps } from './types'

export default function ProfileBasicInfoTab(
  profileBasicInfoTabProps: ProfileBasicInfoTabProps,
) {
  const { editMode, user } = profileBasicInfoTabProps
  // console.log('user')
  // console.log(user)
  return (
    <ProfileBasicInfoTabContainer>
      <ProfileNameContainer>
        {editMode && <BalanceCenterBox />}
        <TypographyWithFont sx={{ fontSize: '22px', fontWeight: 600 }}>
          {user.displayName || user.email || '~'}
        </TypographyWithFont>
        {editMode && (
          <EditIconButton>
            <StyledEditIconImage>
              <Image
                src={'/assets/images/user/editIcon.svg'}
                fill
                style={{ objectFit: 'cover' }}
              />
            </StyledEditIconImage>
          </EditIconButton>
        )}
      </ProfileNameContainer>
      <ProfileDescContainer>
        {editMode && <BalanceCenterBox />}
        <TypographyWithFont
          sx={{ fontSize: '13px', fontWeight: 400, color: '#A278BC' }}
        >
          {user.desc || '~'} {'>'}
        </TypographyWithFont>
        {editMode && (
          <EditIconButton sx={{ mt: '-2px' }}>
            <StyledEditIconImage>
              <Image
                src={'/assets/images/user/editIcon.svg'}
                fill
                style={{ objectFit: 'cover' }}
              />
            </StyledEditIconImage>
          </EditIconButton>
        )}
      </ProfileDescContainer>
      <FollowerAndLike />
    </ProfileBasicInfoTabContainer>
  )
}
