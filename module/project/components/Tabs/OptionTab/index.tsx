import OptionCard from './components/OptionCard'
import { HeaderTabText, OptionsContainer, TabContainer } from './styled'
import { motion } from 'framer-motion'

export default function OptionTab() {
  const options = [
    {
      title: 'Option1',
      desc: '-Digital Download ของเพลง\n-Thankyou on website',
      price: 100,
      pictures: [],
    },
    {
      title: 'Option2',
      desc: '-Digital Download ของเพลง\n-Thankyou on website\n-CD พร้อมลายเซ็น',
      price: 500,
      pictures: [
        'https://pbs.twimg.com/media/EaVuUNeUMAA1twM.jpg:large',
        'https://i.pinimg.com/736x/e0/b5/05/e0b5052f9898193e8ef859624a33a4b5.jpg',
        'https://www.patsonic.com/wp-content/uploads/2022/05/the-last-10-years-movie-featured.jpg',
      ],
    },
    {
      title: 'Option3',
      desc: '-ได้ไฟล์เพลงระดับสูง\n-CD พร้อมลายเซ็น\n-Credit ชื่อท้ายอัลบัม\n-NFT ของอัลบัม\n-บัตร Song Holder',
      price: 1000,
      pictures: [],
    },
    {
      title: 'Option4',
      desc: '-ได้ไฟล์เพลงระดับสูง\n-CD พร้อมลายเซ็น\n-Credit ชื่อท้ายเพลง\n-Vinyl อัลบัม ทำเฉพาะ Songholder เท่านั้น\n-ได้เดโมทุกฉบับ\n-ได้ไฟล์ ทำเพลง (Logic Pro)\n-NFT ของอัลบัม\n-Contact ติดต่อสำหรับอนาคต\n-รับจ้างไปเล่นงานเลี้ยงฟรี 1 งาน\n-เชิญมางานเลี้ยงขอบคุณ\n-บัตร Song Holder',
      price: 5000,
      pictures: [],
    },
  ]
  return (
    <motion.div
      initial={{ opacity: -2, y: '-80%' }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <TabContainer>
        <HeaderTabText>ตัวเลือกการระดมทุน</HeaderTabText>
        <OptionsContainer>
          {options.map(option => (
            <OptionCard
              key={option.title + option.price}
              title={option.title}
              desc={option.desc}
              price={option.price}
              pictures={option.pictures}
            />
          ))}
        </OptionsContainer>
      </TabContainer>
    </motion.div>
  )
}
