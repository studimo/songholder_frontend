import { useEffect, useState } from 'react'
import DiscoverForDesktop from 'components/Discover/DiscoverForDesktop'
import DiscoverForMobile from 'components/Discover/DiscoverForMobile'
import DiscoverForTablet from 'components/Discover/DiscoverForTablet'

export default function Discover() {
  const [screenWidth, setScreenWidth] = useState(0)
  useEffect(() => {
    setScreenWidth(window.innerWidth)
  }, [])
  if (screenWidth <= 550) {
    return <DiscoverForMobile />
  }
  if (screenWidth <= 1400) {
    return <DiscoverForTablet />
  }
  return <DiscoverForDesktop />
}
