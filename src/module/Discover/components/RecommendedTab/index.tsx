import { Carousel } from '@mantine/carousel'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { baseURL } from 'src/common/const/URL'
import RecommendedCard from './components/RecommendedCard/index'
import { RecommendedTabContainer, RecommendedText } from './styled'
import { RecommendedTabProps } from './types'

export default function RecommendedTab(
  recommendedTabProps: RecommendedTabProps,
) {
  const { playerControl } = recommendedTabProps
  const [recommendedProjectList, setRecommendedProjectList] = useState([
    {
      name: 'string',
      song: {
        youtubeId: 'kxs9Su_mbpU',
      },
    },
  ])

  useEffect(() => {
    async function getRecommendedProjectList() {
      const { data } = await axios.get(`${baseURL}/project/discover`)
      setRecommendedProjectList(data)
      console.log(data)
    }
    getRecommendedProjectList()
  }, [])
  return (
    <RecommendedTabContainer>
      <RecommendedText>RECOMMENDED PROJECTS</RecommendedText>
      <Carousel
        slideSize='10%'
        align='start'
        slideGap={-10}
        controlsOffset='xl'
        slidesToScroll={1}
        // dragFree
      >
        {recommendedProjectList.map((recommendedProject, index) => (
          <Carousel.Slide key={'recommendedProject' + index}>
            <RecommendedCard
              name={recommendedProject.name}
              youtubeId={recommendedProject.song.youtubeId}
              playerControl={playerControl}
            />
          </Carousel.Slide>
        ))}
      </Carousel>
    </RecommendedTabContainer>
  )
}
