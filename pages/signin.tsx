import SigninVer2ForDesktop from 'components/SigninVer2ForDesktop'
import SigninVer2ForMobile from 'components/SigninVer2ForMobile'
import { useEffect, useState } from 'react'

export default function signin() {
  const [screenWidth, setScreenWidth] = useState(0)
  useEffect(() => {
    setScreenWidth(window.innerWidth)
  }, [])
  if (screenWidth <= 550) {
    return <SigninVer2ForMobile />
  }
  return <SigninVer2ForDesktop />
}
