import TimelineCard from './components/TimelineCard'
import { TimelineContainer } from './styled'
import { motion } from 'framer-motion'

export default function Timeline() {
  const TimelineDatas = [
    {
      date: new Date('2023-04-10'),
      title: 'เปิดระดมทุน',
      desc: 'ldkfjojfdjflasdfjladjfldkjfldjfldsjlfjasdlfjdsalfjldjfljfsdjfadfadservsdvasdvdsfvdsfvadsdssavldkfjojfdjflasdfjladjfldkjfldjfldsjlfjasdlfjdsalfjldjfljfsdjfadfadservsdvasdvdsfvdsfvadsdssav',
    },
    {
      date: new Date('2023-05-10'),
      title: 'finalize เพลง',
      desc: 'ldkfjojfdjflasdfjladjfldkjfldjfldsjlfjasdlfjdsalfjldjfljfsdjfadfadservsdvasdvdsfvdsfvadsdssav',
    },
    {
      date: new Date('2023-05-15'),
      title: 'finalize คนทำ mv',
      desc: 'ldkfjojfdjflasdfjladjfldkjfldjfldsjlfjasdlfjdsalfjldjfljfsdjfadfadservsdvasdvdsfvdsfvadsdssav',
    },
    {
      date: new Date('2023-05-18'),
      title: 'เริ่มถ่ายทำ mv',
      desc: 'ldkfjojfdjflasdfjladjfldkjfldjfldsjlfjasdlfjdsalfjldjfljfsdjfadfadservsdvasdvdsfvdsfvadsdssav',
    },
    {
      date: new Date('2023-05-25'),
      title: 'สิ้นสุดการถ่ายทำ mv',
      desc: 'ldkfjojfdjflasdfjladjfldkjfldjfldsjlfjasdlfjdsalfjldjfljfsdjfadfadservsdvasdvdsfvdsfvadsdssav',
    },
    {
      date: new Date('2023-05-26'),
      title: 'วางแผนการตลาด',
      desc: 'ldkfjojfdjflasdfjladjfldkjfldjfldsjlfjasdlfjdsalfjldjfljfsdjfadfadservsdvasdvdsfvdsfvadsdssav',
    },
    {
      date: new Date('2023-05-30'),
      title: 'เริ่มโปรโมท',
      desc: 'ldkfjojfdjflasdfjladjfldkjfldjfldsjlfjasdlfjdsalfjldjfljfsdjfadfadservsdvasdvdsfvdsfvadsdssav',
    },
    {
      date: new Date('2023-05-30'),
      title: 'สิ้นสุดการระดมทุน',
      desc: 'ldkfjojfdjflasdfjladjfldkjfl',
    },
  ]
  return (
    <motion.div
      initial={{ opacity: -2, y: '-80%' }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <TimelineContainer>
        {TimelineDatas.map(TimelineData => (
          <TimelineCard
            key={TimelineData.date.getDate() + TimelineData.title}
            date={TimelineData.date}
            title={TimelineData.title}
            desc={TimelineData.desc}
          />
        ))}
      </TimelineContainer>
    </motion.div>
  )
}
