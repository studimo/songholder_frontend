import { Carousel, Embla } from '@mantine/carousel'
import { Button } from '@mui/material'
import { useEffect, useState } from 'react'
import AdsBanner from './components/AdsBanner'
import { Banners } from './const'
import { AdsBannerTabContainer } from './styled'

export default function AdsBannerTab() {
  const [embla, setEmbla] = useState<Embla | null>(null)
  return (
    <AdsBannerTabContainer>
      {/* <Button
        onClick={() => {
          if (embla) console.log(embla?.scrollSnapList()[2])
        }}
      >
        test
      </Button> */}
      <Carousel
        styles={{
          indicator: {
            width: 4,
            height: 4,
            transition: 'width 250ms ease',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            '&[data-active]': {
              width: 12,
            },
          },
        }}
        slideSize='320px'
        slideGap={-10}
        controlsOffset='xl'
        slidesToScroll={1}
        withIndicators
        withControls={false}
        getEmblaApi={setEmbla}
        loop
      >
        {Banners.map((banner, index) => (
          <Carousel.Slide key={'Banner no ' + index}>
            <AdsBanner
              bannerPhotoURL={banner.bannerPhotoURL}
              // index={index}
              // embla={embla}
            />
          </Carousel.Slide>
        ))}
      </Carousel>
    </AdsBannerTabContainer>
  )
}
