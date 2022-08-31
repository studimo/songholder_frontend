import { Carousel } from '@mantine/carousel'
import { recommendedProject } from 'src/common/mocks/recommendedProject'
import RecommendedCard from './components/RecommendedCard/index'
import { RecommendedTabContainer, RecommendedText } from './styled'

export default function RecommendedTab() {
  return (
    <RecommendedTabContainer>
      <RecommendedText>RECOMMENDED PROJECTS</RecommendedText>
      <Carousel
        slideSize='10%'
        align='start'
        slideGap={-10}
        controlsOffset='xl'
        slidesToScroll={3}
        dragFree
      >
        {recommendedProject.map((project, index) => (
          <Carousel.Slide key={'recommendedProject' + index}>
            <RecommendedCard
              name={project.name}
              youtubeId={project.youtubeId}
            />
          </Carousel.Slide>
        ))}
      </Carousel>
    </RecommendedTabContainer>
  )
}
