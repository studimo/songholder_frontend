import { LikeShowContainer, TypographyWithFont } from './styled'

export default function LikeShow() {
  return (
    <LikeShowContainer>
      <TypographyWithFont
        sx={{ fontSize: '15px', fontWeight: 600, color: '#615190' }}
      >
        6,905
      </TypographyWithFont>
      <TypographyWithFont
        sx={{ fontSize: '13px', fontWeight: 400, color: '#A278BC' }}
      >
        like
      </TypographyWithFont>
    </LikeShowContainer>
  )
}
