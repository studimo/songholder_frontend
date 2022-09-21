import TimelineCard from './components/TimelineCard'
import { TimelineContainer } from './styled'
import { motion } from 'framer-motion'
import { TimelineProps } from './types'

export default function Timeline(timelineProps: TimelineProps) {
  const { timelineDatas } = timelineProps
  return (
    <motion.div
      initial={{ opacity: -2, y: '-80%' }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <TimelineContainer>
        {timelineDatas.map((TimelineData, inx) => (
          <TimelineCard
            key={'Timeline Data ' + inx + TimelineData.title}
            date={new Date(TimelineData.date)}
            title={TimelineData.title}
            desc={TimelineData.desc}
            isFirstOrLast={
              inx == 0
                ? 'first'
                : inx == timelineDatas.length - 1
                ? 'last'
                : 'none'
            }
          />
        ))}
      </TimelineContainer>
    </motion.div>
  )
}
