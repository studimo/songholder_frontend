import RecommendedCard from './components/RecommendedCard/index'
import {
  RecommendedCardContainer,
  RecommendedTabContainer,
  RecommendedText,
} from './styled'

export default function RecommendedTab() {
  return (
    <RecommendedTabContainer>
      <RecommendedText>RECOMMENDED PROJECTS</RecommendedText>
      <RecommendedCardContainer>
        <RecommendedCard />
        <RecommendedCard />
        <RecommendedCard />
        <RecommendedCard />
        <RecommendedCard />
        <RecommendedCard />
      </RecommendedCardContainer>
    </RecommendedTabContainer>
  )
}
