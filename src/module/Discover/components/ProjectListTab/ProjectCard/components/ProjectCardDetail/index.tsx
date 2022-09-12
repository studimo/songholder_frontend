import { TypographyWithFont } from './styled'

export default function ProjectCardDetail() {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        // backgroundColor: 'red',
        padding: '5px 10px',
        marginLeft: '100px',
        paddingRight: '30px',
        flexDirection: 'column',
      }}
    >
      <TypographyWithFont>DRG’s Project</TypographyWithFont>
      <TypographyWithFont
        sx={{
          fontSize: '9px',
          lineHeight: '10px',
          color: '#929292',
        }}
      >
        DRG
      </TypographyWithFont>
      <TypographyWithFont
        sx={{
          fontSize: '9px',
          lineHeight: '10px',
          color: '#929292',
        }}
      >
        อัลบัมที่เปรียบเสมือนชีวิตคนคนหนึ่ง
        กับเรื่องราวความรักที่ถูกบรรจุลงไปในเพลง
      </TypographyWithFont>
    </div>
  )
}
