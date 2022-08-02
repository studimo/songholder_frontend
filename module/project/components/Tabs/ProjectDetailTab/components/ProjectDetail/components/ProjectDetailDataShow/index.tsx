import { Typography } from '@mui/material'
import { DataShowContainer, DataShowText } from './styled'
import { ProjectDetailDataShowProps } from './types'

export default function ProjectDetailDataShow(
  props: ProjectDetailDataShowProps,
) {
  const { title, data } = props
  return (
    <DataShowContainer>
      <DataShowText
        sx={{
          mr: '5px',
          fontSize: '13px',
          fontWeight: 300,
        }}
      >
        {title}:
      </DataShowText>
      <DataShowText
        sx={{
          mb: '1px',
          fontSize: '14px',
          fontWeight: 400,
        }}
      >
        {data}
      </DataShowText>
    </DataShowContainer>
  )
}
