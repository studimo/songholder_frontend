import { IconButton } from '@mui/material'
import Image from 'next/future/image'
import {
  BackgroundCameraIcon,
  CameraIconButton,
  StyledCameraIconImage,
  StyledCoverImage,
} from './styled'
import { BackgroundImageProps } from './types'

export default function BackgroundImage(
  backgroundImageProps: BackgroundImageProps,
) {
  const { editMode, backgroundPhotoURL } = backgroundImageProps
  return (
    <StyledCoverImage
      sx={{
        height: { xs: '200px', md: '300px' },
      }}
    >
      <Image
        src={
          backgroundPhotoURL ||
          '/assets/images/project/projectDetail/coverImage.svg'
        }
        fill
        style={{ objectFit: 'cover' }}
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
    </StyledCoverImage>
  )
}
