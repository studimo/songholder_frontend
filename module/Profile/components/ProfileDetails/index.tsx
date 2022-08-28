import ProfileBasicInfoTab from './components/ProfileBasicInfoTab'
import MusicExperienceTab from './components/tab/MusicExperienceTab'
import MusicPersonalityTab from './components/tab/MusicPersonalityTab'
import { ProjectDetailsContainer } from './styled'
import { ProfileDetailsProps } from './types'

export default function ProfileDetails(
  profileDetailsProps: ProfileDetailsProps,
) {
  const { editMode } = profileDetailsProps
  return (
    <ProjectDetailsContainer>
      <ProfileBasicInfoTab editMode={editMode} />
      <MusicPersonalityTab editMode={editMode} />
      <MusicExperienceTab editMode={editMode} />
    </ProjectDetailsContainer>
  )
}
