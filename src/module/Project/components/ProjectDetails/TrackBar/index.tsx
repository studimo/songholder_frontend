import Knot from './components/Knot'
import { KnotsContainer, ProgressBar, TrackBarContainer } from './styled'

export default function TrackBar() {
  const knotDetails = [
    { knotPosition: 25, knotValue: '1,000' },
    { knotPosition: 50, knotValue: '2,000' },
    { knotPosition: 100, knotValue: '4,000' },
  ]
  const currentPercentage = 50
  return (
    <TrackBarContainer>
      <KnotsContainer>
        {knotDetails.map(knotDetail => (
          <Knot
            key={knotDetail.knotPosition}
            knotPosition={knotDetail.knotPosition}
            currentPercentage={currentPercentage}
            knotValue={knotDetail.knotValue}
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
