import { Button } from '@mui/material'
import { useState } from 'react'
import { HeaderTabText } from './styled'
import { HeaderButtonTabProps } from './types'

export default function HeaderButtonTab(props: HeaderButtonTabProps) {
  const { tabName, onOpen, setOnOpen } = props
  return (
    <Button
      onClick={() => setOnOpen(!onOpen)}
      sx={{ color: 'Black', zIndex: 2 }}
    >
      <HeaderTabText>
        {tabName} {onOpen ? 'v' : '>'}
      </HeaderTabText>
    </Button>
  )
}
