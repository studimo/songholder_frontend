import { Typography } from '@mui/material'
import Image from 'next/image'
import { KnotContainer, KnotText, StyledKnotImage } from './styled'
import { KnotProps } from './types'

export default function Knot(props: KnotProps) {
  const { currentPercentage, knotPosition, knotValue } = props
  const successKnot = currentPercentage >= knotPosition
  return (
    <KnotContainer
      style={{
        left: `${knotPosition}%`,
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
          layout='fill'
          objectFit='cover'
        />
      </StyledKnotImage>
      <KnotText>{knotValue}</KnotText>
    </KnotContainer>
  )
}
