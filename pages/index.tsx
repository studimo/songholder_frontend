import LandingPageForDesktop from 'components/LandingpageForDesktop'
import LandingPageForMobile from 'components/LandingpageForMobile'
import { useEffect, useState } from 'react'

export default function LandingPage() {
  const [screenWidth, setScreenWidth] = useState(0)
  useEffect(() => {
    setScreenWidth(window.innerWidth)
  }, [])
  if (screenWidth <= 500) {
    return <LandingPageForMobile />
  }
  return <LandingPageForDesktop />
}
