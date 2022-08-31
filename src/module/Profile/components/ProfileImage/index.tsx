import Image from 'next/future/image'
import {
  BackgroundCameraIcon,
  BackgroundProfileImage,
  CameraIconButton,
  ProfileContainer,
  StyledCameraIconImage,
  StyledProfileImage,
} from './styled'
import { ProfileImageProps } from './types'

export default function ProfileImage(profileImageProps: ProfileImageProps) {
  const { editMode, userPhotoURL } = profileImageProps
  return (
    <ProfileContainer>
      <BackgroundProfileImage />
      <StyledProfileImage>
        <Image
          src={
            userPhotoURL ||
            '/assets/images/project/projectDetail/artistImage.svg'
          }
          fill
          style={{ objectFit: 'cover' }}
          referrerPolicy='no-referrer'
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
