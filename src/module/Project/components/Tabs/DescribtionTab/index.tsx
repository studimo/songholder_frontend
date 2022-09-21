import { useState } from 'react'
import HeaderButtonTab from '../components/HeaderButtonTab'
import { DescriptionText, TabContainer } from './styled'
import { motion } from 'framer-motion'
import { DescribtionTabProps } from './types'

export default function DescribtionTab(
  describtionTabProps: DescribtionTabProps,
) {
  const [onOpen, setOnOpen] = useState(false)
  const { toListener } = describtionTabProps
  return (
    <TabContainer>
      <HeaderButtonTab
        tabName='ถึงผู้ฟังทุกท่าน...'
        onOpen={onOpen}
        setOnOpen={setOnOpen}
      />
      {onOpen ? (
        <motion.div
          initial={{ opacity: -2, y: '-80%' }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <DescriptionText>{toListener}</DescriptionText>
        </motion.div>
      ) : null}
    </TabContainer>
  )
}
