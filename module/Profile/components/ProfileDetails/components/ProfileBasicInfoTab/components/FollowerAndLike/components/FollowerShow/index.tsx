import { FollowerShowContainer, TypographyWithFont } from './styled'

export default function FollowerShow() {
  return (
    <FollowerShowContainer>
      <TypographyWithFont
        sx={{ fontSize: '15px', fontWeight: 600, color: '#615190' }}
      >
        1,738
      </TypographyWithFont>
      <TypographyWithFont
        sx={{ fontSize: '13px', fontWeight: 400, color: '#A278BC' }}
      >
        follower
      </TypographyWithFont>
    </FollowerShowContainer>
  )
}
