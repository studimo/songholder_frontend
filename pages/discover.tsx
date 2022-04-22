import { useEffect, useState } from 'react'
import DiscoverForDesktop from 'components/DiscoverForDesktop'
import DiscoverForMobile from 'components/DiscoverForMobile'
import DiscoverForTablet from 'components/DiscoverForTablet'

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
