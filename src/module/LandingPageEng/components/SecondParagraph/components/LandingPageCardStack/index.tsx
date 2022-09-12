import { Stack } from '@mui/material'
import LandingpageCard from './components/LandingpageCard'

export default function LandingpageCardStack() {
  return (
    <Stack
      direction='row'
      justifyContent='flex-start'
      alignItems='center'
      spacing='0.5'
    >
      <LandingpageCard url='3u_52yBjXZw' />
      <LandingpageCard url='dIwxIF5SBLc' />
      <LandingpageCard url='nOPyJ9M9cX8' />
      <LandingpageCard url='EDs719Qy414' />
    </Stack>
  )
}
