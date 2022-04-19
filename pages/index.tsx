import LandingPageForDesktop from 'components/LandingpageForDesktop'
import LandingPageForMobile from 'components/LandingpageForMobile'
import LandingpageForTablet from 'components/LandingpageForTablet'
import { useEffect, useState } from 'react'

export default function LandingPage() {
  const [screenWidth, setScreenWidth] = useState(0)
  useEffect(() => {
    setScreenWidth(window.innerWidth)
  }, [])
  if (screenWidth <= 550) {
    return <LandingPageForMobile />
  }
  if (screenWidth <= 1400) {
    return <LandingpageForTablet />
  }
  return <LandingPageForDesktop />
}
