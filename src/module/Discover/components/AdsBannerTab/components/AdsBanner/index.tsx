import { Button } from '@mui/material'
import Image from 'next/future/image'
import { useEffect, useState } from 'react'
import { AdsBannerProps } from './types'

export default function AdsBanner(adsBannerProps: AdsBannerProps) {
  const { bannerPhotoURL } = adsBannerProps
  // console.log(embla?.scrollProgress())
  // console.log(embla?.scrollSnapList()[index])
  // console.log(embla?.scrollProgress())
  // const [scrollProgress, setScrollProgress] = useState(1)
  // useEffect(() => {
  //   // if (embla) setScrollProgress(embla.scrollProgress())
  //   if (embla) console.log(embla.scrollProgress())
  // }, [embla])
  // useEffect(function onFirstMount() {
  //   function onScroll() {
  //     if (embla) console.log(embla.scrollProgress())
  //     // setScrollProgress
  //   }

  //   window.addEventListener('mousemove', onScroll)
  // }, [])
  return (
    <div
      style={{
        display: 'flex',
        width: '300px',
        height: '150px',
        position: 'relative',
        borderRadius: '10px',
        overflow: 'hidden',
        marginLeft: 'auto',
        marginRight: 'auto',
        boxShadow: '0px 3px 5px 3px rgba(0, 0, 0, 0.2)',
        marginBottom: '30px',
        // transform: `scale(${scrollProgress})`,
      }}
      // onTouchMove={() => {
      //   if (embla)
      //     setScrollProgress(
      //       1 -
      //         Math.abs(embla.scrollProgress() - embla.scrollSnapList()[index]),
      //     )
      // }}
    >
      {/* <Button
        onClick={() => {
          if (embla) console.log(embla.scrollProgress())
        }}
        sx={{ zIndex: 2 }}
      >
        test
      </Button> */}
      <Image src={bannerPhotoURL} fill style={{ objectFit: 'cover' }} />
    </div>
  )
}
