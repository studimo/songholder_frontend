import {
  Card,
  CardActionArea,
  CardMedia,
  Container,
  Divider,
  Stack,
  Typography,
} from '@mui/material'
import { styled } from '@mui/system'

export const RecommendedCardContainer = styled(Stack)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '150px',
  width: '100px',
  // backgroundColor: 'violet',
}))
export const RecommendedCardMainCard = styled(Card)(() => ({
  border: 'none',
  boxShadow: 'none',
  background: 'none',
}))
export const RecommendedCardMedia = styled(CardMedia)(() => ({
  clipPath: 'polygon(15% 0%, 100% 0%,85% 100%,0% 100%)',
  height: 120, //220
  width: 120, //220
  transition: '0.2s',
  transitionDelay: '0.02s',
  backgroundSize: 'cover',
  borderRadius: '0px',
  '&:hover': {
    // clipPath: 'polygon(9% 0%, 100% 0%,91% 100%,0% 100%)',
    // height: 120, //280
    // width: 150, //500
  },
  boxShadow: '10px 0px 25px rgba(0, 0, 0, 0.5)',
}))
export const RecommendedCardActionArea = styled(CardActionArea)(() => ({
  height: '100%',
  weight: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderBottomRightRadius: 50,
}))

export const RecommendedText = styled(Typography)(() => ({
  fontFamily: 'Mitr',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '15px',
  lineHeight: '28px',

  color: '#6F9BC4',
  marginRight: '30px',
}))
