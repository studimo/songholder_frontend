import Image from 'next/future/image'
import {
  BackgroundCameraIcon,
  CameraIconButton,
  ProfileContainer,
  StyledCameraIconImage,
  StyledProfileImage,
} from './styled'
import { ProfileImageProps } from './types'

export default function ProfileImage(profileImageProps: ProfileImageProps) {
  const { editMode } = profileImageProps
  return (
    <ProfileContainer>
      <StyledProfileImage>
        <Image
          src={'/assets/images/project/projectDetail/artistImage.svg'}
          fill
        />
        {editMode && <BackgroundCameraIcon />}
        {editMode && (
          <CameraIconButton>
            <StyledCameraIconImage>
              <Image
                src={'/assets/images/user/cameraIcon.svg'}
                fill
                style={{ objectFit: 'cover' }}
              />
            </StyledCameraIconImage>
          </CameraIconButton>
        )}
      </StyledProfileImage>
    </ProfileContainer>
  )
}
