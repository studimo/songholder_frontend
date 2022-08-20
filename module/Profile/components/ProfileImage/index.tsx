import Image from 'next/future/image'
import { ProfileContainer, StyledProfileImage } from './styled'

export default function ProfileImage() {
  return (
    <ProfileContainer>
      <StyledProfileImage>
        <Image
          src={'/assets/images/project/projectDetail/artistImage.svg'}
          fill
        />
      </StyledProfileImage>
    </ProfileContainer>
  )
}
