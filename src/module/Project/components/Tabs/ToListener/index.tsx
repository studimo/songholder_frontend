import { useState } from 'react'
import { DescriptionText, StyledEditIconImage, TabContainer } from './styled'
import { motion } from 'framer-motion'
import HeaderButtonTab from '../components/HeaderButtonTab'
import { TolistenerProps } from './types'
import Image from 'next/future/image'

export default function TolistenerTab(describtionTabProps: TolistenerProps) {
  const [onOpen, setOnOpen] = useState(false)
  const {
    title1,
    title2,
    desc1,
    desc2,
    endingDesc,
    toListenerPhotoURL,
    aboutProjectPhotoURL,
  } = describtionTabProps
  return (
    <TabContainer>
      <HeaderButtonTab
        tabName='ถึงผู้ฟัง'
        onOpen={onOpen}
        setOnOpen={setOnOpen}
      />
      {onOpen ? (
        <motion.div
          initial={{ opacity: -2, y: '-80%' }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
          }}
        >
          <DescriptionText sx={{ fontWeight: 500 }}>{title1}</DescriptionText>
          <DescriptionText>{desc1}</DescriptionText>

          {toListenerPhotoURL && (
            <StyledEditIconImage>
              <Image
                src={toListenerPhotoURL}
                alt='toListenerPhoto'
                fill
                style={{ objectFit: 'contain' }}
              />
            </StyledEditIconImage>
          )}

          <DescriptionText sx={{ fontWeight: 500 }}>{title2}</DescriptionText>
          <DescriptionText>{desc2}</DescriptionText>

          {aboutProjectPhotoURL && (
            <StyledEditIconImage>
              <Image
                src={aboutProjectPhotoURL}
                alt='toListenerPhoto2'
                fill
                style={{ objectFit: 'contain' }}
              />
            </StyledEditIconImage>
          )}

          <DescriptionText>{endingDesc}</DescriptionText>
        </motion.div>
      ) : null}
    </TabContainer>
  )
}
