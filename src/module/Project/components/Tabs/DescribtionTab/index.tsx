import { useState } from 'react'
import HeaderButtonTab from '../components/HeaderButtonTab'
import { DescriptionText, TabContainer } from './styled'
import { motion } from 'framer-motion'

export default function DescribtionTab() {
  const [onOpen, setOnOpen] = useState(false)
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
          <DescriptionText>
            &nbsp;&nbsp;&nbsp;&nbsp;สวัสดีครับ ผม DRG ครับ
            ตอนนี้ต้องการจะทำอัลบัม โดยจะมีเพลงอยู่ 8
            เพลงรวมสองเพลงข้างต้นที่ได้ปล่อยไปแล้ว โดยอีก 6
            เพลงที่เหลือได้ทำการแต่งไว้หมดแล้ว
            บางเพลงอัดไปบ้างแล้วบางเพลงยังไม่ได้อัด
            โดยอัลบัมที่จะทำจะสื่อถึงเรื่องราวความรักที่เกิดในชีวิตคน
            เปรียบเสมือนว่าอัลบัมนี้คือชีวิตคนหนึ่งคน
            โดยผมต้องการทำอัลบัมนี้เป็นอัลบัมเปิดตัว
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;ผมจึงขอนำเงินจากการระดมทุนครั้งนี้ไปทำการอัดเพลง
            จนถึงขั้นทำเอ็มวีในบางเพลง และรวมถึงการทำการตลาดเพลง
          </DescriptionText>
        </motion.div>
      ) : null}
    </TabContainer>
  )
}
