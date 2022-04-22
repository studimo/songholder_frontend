import RegisterVer2ForDesktop from 'components/RegisterVer2ForDesktop'
import RegisterVer2ForMobile from 'components/RegisterVer2ForMobile'
import { useEffect, useState } from 'react'

export default function register() {
  const [screenWidth, setScreenWidth] = useState(0)
  useEffect(() => {
    setScreenWidth(window.innerWidth)
  }, [])
  if (screenWidth <= 550) {
    return <RegisterVer2ForMobile />
  }
  return <RegisterVer2ForDesktop />
}
