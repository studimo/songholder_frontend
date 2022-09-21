import { Typography } from '@mui/material'
import Image from 'next/future/image'
import { KnotContainer, KnotText, StyledKnotImage } from './styled'
import { KnotProps } from './types'

export default function Knot(props: KnotProps) {
  const { currentPercentage, knotName, knotValue, targetBudget } = props
  const successKnot = currentPercentage >= (knotValue / targetBudget) * 100
  return (
    <KnotContainer
      style={{
        left: `${(knotValue / targetBudget) * 100}%`,
      }}
    >
      <StyledKnotImage
        style={{
          height: successKnot ? '18px' : '14px',
          width: successKnot ? '18px' : '14px',
          marginTop: successKnot ? '0px' : '1px',
        }}
      >
        <Image
          src={
            successKnot
              ? '/assets/images/project/successKnot.svg'
              : '/assets/images/project/knot.svg'
          }
          fill
          // width="100%"
        />
      </StyledKnotImage>
      <KnotText>{knotName}</KnotText>
    </KnotContainer>
  )
}
