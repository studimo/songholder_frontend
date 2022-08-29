import FollowerShow from './components/FollowerShow'
import LikeShow from './components/LikeShow'
import { DividerDiv, FollowerAndLikeContainer } from './styled'

export default function FollowerAndLike() {
  return (
    <FollowerAndLikeContainer>
      <FollowerShow />
      <DividerDiv />
      <LikeShow />
    </FollowerAndLikeContainer>
  )
}
