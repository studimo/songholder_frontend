import TimeLineCard from './components/TimeLineCard'
import { TimeLineContainer } from './styled'

export default function TimeLine() {
  const timeLineDatas = [
    {
      date: new Date('2023-04-10'),
      title: 'เปิดระดมทุน',
      desc: 'ldkfjojfdjflasdfjladjfldkjfldjfldsjlfjasdlfjdsalfjldjfljfsdjfadfadservsdvasdvdsfvdsfvadsdssav',
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
    <TimeLineContainer>
      {timeLineDatas.map(timeLineData => (
        <TimeLineCard
          date={timeLineData.date}
          title={timeLineData.title}
          desc={timeLineData.desc}
        />
      ))}
    </TimeLineContainer>
  )
}
