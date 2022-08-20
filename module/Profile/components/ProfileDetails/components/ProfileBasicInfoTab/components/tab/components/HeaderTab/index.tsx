import { TypographyWithFont, HeaderTabContainer } from './styled'
import { HeaderTabProps } from './types'

export default function HeaderTab(headerTabProps: HeaderTabProps) {
  const { tabName, tabColor, href } = headerTabProps
  return (
    <HeaderTabContainer>
      <TypographyWithFont
        sx={{
          color: `${tabColor}`,
        }}
      >
        {tabName}
      </TypographyWithFont>
      <TypographyWithFont
        sx={{
          fontSize: '13px',
          fontWeight: 400,
          color: 'rgba(51, 83, 128, 0.5)',
          marginLeft: 'auto',
          '&:hover': {
            textDecoration: 'underline',
          },
        }}
      >
        <a href={href}>see all</a>
      </TypographyWithFont>
    </HeaderTabContainer>
  )
}
