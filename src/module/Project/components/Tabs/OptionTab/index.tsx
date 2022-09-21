import OptionCard from './components/OptionCard'
import { HeaderTabText, OptionsContainer, TabContainer } from './styled'
import { motion } from 'framer-motion'
import { OptionTabProps } from './types'

export default function OptionTab(optionTabProps: OptionTabProps) {
  const { options } = optionTabProps
  return (
    <motion.div
      initial={{ opacity: -2, y: '-80%' }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <TabContainer>
        <HeaderTabText>ตัวเลือกการระดมทุน</HeaderTabText>
        <OptionsContainer>
          {options.map((option, inx) => (
            <OptionCard
              key={option.title + option.price}
              title={option.title}
              desc={option.desc}
              price={option.price}
              descPrice={option.descPrice}
              pictures={option.picture}
              inx={inx}
            />
          ))}
        </OptionsContainer>
      </TabContainer>
    </motion.div>
  )
}
