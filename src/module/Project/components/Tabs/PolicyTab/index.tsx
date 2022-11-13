import { useState } from 'react'
import { DescriptionText, TabContainer } from './styled'
import { motion } from 'framer-motion'
import HeaderButtonTab from '../components/HeaderButtonTab'

export default function PolicyTab() {
  const [onOpen, setOnOpen] = useState(false)
  return (
    <TabContainer>
      <HeaderButtonTab
        tabName='เงื่อนไขการสมทบทุน'
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
          <DescriptionText>
            ศิลปินจะได้รับเงินทุนเมื่อถึงยอดขั้นต่ำเท่านั้น
            เพื่อการพัฒนาโปรเจคต่อ หากไม่ถึงยอดขั้นต่ำภายในวันที่กำหนด
            ศิลปินจะเป็นผู้ตัดสินใจจะขยายระยะเวลาโปรเจค หรือคืนเงินแก่ผู้สมทบทุน
          </DescriptionText>
        </motion.div>
      ) : null}
    </TabContainer>
  )
}
