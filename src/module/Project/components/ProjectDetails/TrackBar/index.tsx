import Knot from './components/Knot'
import { KnotsContainer, ProgressBar, TrackBarContainer } from './styled'
import { TrackBarProps } from './types'

export default function TrackBar(trackBarProps: TrackBarProps) {
  const { knotDetails, currentBudget, targetBudget } = trackBarProps
  const currentPercentage = (currentBudget / targetBudget) * 100
  return (
    <TrackBarContainer>
      <KnotsContainer>
        {knotDetails.map(knotDetail => (
          <Knot
            key={'knot at ' + knotDetail.knotValue}
            knotValue={knotDetail.knotValue}
            knotName={knotDetail.knotName}
            currentPercentage={currentPercentage}
            targetBudget={targetBudget}
          />
        ))}
      </KnotsContainer>
      <ProgressBar
        style={{
          width: `${currentPercentage}%`,
        }}
      />
    </TrackBarContainer>
  )
}
