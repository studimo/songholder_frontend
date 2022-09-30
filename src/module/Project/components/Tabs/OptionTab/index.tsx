import OptionCard from './components/OptionCard'
import {
  HeaderTabText,
  OptionsContainer,
  TabContainer,
  TypographyWithFont,
} from './styled'
import { motion } from 'framer-motion'
import { OptionTabProps } from './types'
import { Carousel, Embla } from '@mantine/carousel'
import { height } from '@mui/system'
import { Button, Typography } from '@mui/material'
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded'
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded'
import { useCallback, useEffect, useState } from 'react'
import Image from 'next/future/image'
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded'

export default function OptionTab(optionTabProps: OptionTabProps) {
  const { options } = optionTabProps
  const [option, setOption] = useState(options[0])
  const [currentSelect, setCurrentSelect] = useState(0)
  const [currentPaymentSelect, setCurrentPaymentSelect] = useState<any>(null)
  useEffect(() => {
    setOption(options[0])
  }, [options])

  return (
    <motion.div
      initial={{ opacity: -2, y: '-80%' }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <TabContainer>
        <HeaderTabText>ตัวเลือกการระดมทุน</HeaderTabText>
        <Carousel
          align='start'
          slideGap='md'
          controlsOffset={-1000}
          nextControlIcon={
            <ChevronRightRoundedIcon sx={{ color: '#A2B6D2' }} />
          }
          previousControlIcon={
            <ChevronLeftRoundedIcon sx={{ color: '#A2B6D2' }} />
          }
        >
          {options.map((option, inx) => (
            <div>
              <Button
                sx={{
                  textTransform: 'none',
                  width: '100%',
                  color: '#A2B6D2',
                }}
                onClick={() => {
                  setCurrentSelect(inx)
                  setOption(options[inx])
                }}
              >
                <TypographyWithFont
                  sx={{
                    justifyContent: 'center',
                    width: '100%',
                    whiteSpace: 'nowrap',
                    color: currentSelect == inx ? '#335380' : '#A2B6D2',
                  }}
                  key={option.title + inx}
                >
                  {option.title}
                </TypographyWithFont>
              </Button>
            </div>
          ))}
        </Carousel>
        <OptionCard
          key={option.title + option.price}
          title={option.title}
          desc={option.desc}
          price={option.price}
          descPrice={option.descPrice}
          pictures={option.picture}
          inx={currentSelect}
        />
        <HeaderTabText sx={{ marginTop: '20px' }}>ช่องทางการโอน</HeaderTabText>
        <Button
          sx={{
            display: 'flex',
            border: '1.5px solid #A9CAE8',
            borderRadius: '5px',
            width: '90%',
            marginLeft: 'auto',
            marginRight: 'auto',
            padding: '14px 7px',
            flexDirection: 'row',
            justifyContent: 'space-between',
            textTransform: 'none',
          }}
          onClick={() => {
            setCurrentPaymentSelect(0)
          }}
        >
          <div
            style={{
              display: 'flex',
              position: 'relative',
              width: '60px',
              height: '20px',
              minWidth: '60px',
              minHeight: '20px',
            }}
          >
            <Image
              src={'/assets/images/project/optionTab/promtPay.png'}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <TypographyWithFont
            sx={{
              color: currentPaymentSelect == 0 ? '#8060B7' : '#6F9BC3',
              ml: '15px',
              mr: '10px',
              fonsize: '11px',
              // color: '#8060B7'
            }}
          >
            พร้อมเพย์ อี-วอลเล็ต / G-Wallet
          </TypographyWithFont>
        </Button>
        {currentPaymentSelect != null ? (
          <div
            style={{
              position: 'absolute',
              bottom: '10px',
              right: '10px',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <TypographyWithFont sx={{ color: '#A2B6D2' }}>
              1,000 บาท |&nbsp;
            </TypographyWithFont>
            <Button sx={{ height: '20px', color: '#335381' }}>
              <TypographyWithFont> รับ QR</TypographyWithFont>
              <ArrowRightAltRoundedIcon sx={{ color: '#67C1C2' }} />
            </Button>
          </div>
        ) : null}
      </TabContainer>
    </motion.div>
  )
}
