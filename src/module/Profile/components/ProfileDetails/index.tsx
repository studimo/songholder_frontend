import ProfileBasicInfoTab from './components/tab/ProfileBasicInfoTab'
import MusicExperienceTab from './components/tab/MusicExperienceTab'
import MusicPersonalityTab from './components/tab/MusicPersonalityTab'
import { ProjectDetailsContainer } from './styled'
import { ProfileDetailsProps } from './types'

export default function ProfileDetails(
  profileDetailsProps: ProfileDetailsProps,
) {
  const { editMode, user } = profileDetailsProps
  return (
    <ProjectDetailsContainer>
      <ProfileBasicInfoTab editMode={editMode} user={user} />
      <MusicPersonalityTab editMode={editMode} />
      <MusicExperienceTab editMode={editMode} />
    </ProjectDetailsContainer>
  )
}
