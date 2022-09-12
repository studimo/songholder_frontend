import { Typography } from '@mui/material'

export default function DescText() {
  return (
    <Typography
      sx={{
        mt: { xs: '-330px', sm: '-335px', md: '-360px', lg: '-390px' },
        ml: { xs: '20px', sm: '50px', md: "'100px'" },
        width: { xs: '170px', sm: '230px', md: '270px', lg: '360px' },
        fontFamily: 'mitr',
        fontStyle: 'normal',
        fontWeight: '200',
        fontSize: { xs: '12px', sm: '15px', md: '18px', lg: '28px' },
        lineHeight: { xs: '20px', sm: '25px', md: '35px', lg: '40px' },
        color: '#FFFFFF',
      }}
    >
      Songholder
      เป็นพื้นที่ให้คุณได้มีส่วนร่วมในผลงานของศิลปินผ่านการระดมทุนแถมยังได้ของตอบแทนจากการสนับสนุนด้วย
    </Typography>
  )
}
