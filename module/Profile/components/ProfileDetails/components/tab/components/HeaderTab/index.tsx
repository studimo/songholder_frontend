import Image from 'next/future/image'
import {
  TypographyWithFont,
  HeaderTabContainer,
  StyledEditIconImage,
  EditIconButton,
} from './styled'
import { HeaderTabProps } from './types'

export default function HeaderTab(headerTabProps: HeaderTabProps) {
  const { tabName, tabColor, href, editMode } = headerTabProps
  return (
    <HeaderTabContainer>
      <TypographyWithFont
        sx={{
          color: `${tabColor}`,
        }}
      >
        {tabName}
      </TypographyWithFont>

      {editMode && (
        <EditIconButton sx={{ mt: '-2px', ml: 'auto' }}>
          <StyledEditIconImage>
            <Image
              src={'/assets/images/user/editIcon.svg'}
              fill
              style={{ objectFit: 'cover' }}
            />
          </StyledEditIconImage>
        </EditIconButton>
      )}
      {!editMode && (
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
      )}
    </HeaderTabContainer>
  )
}
