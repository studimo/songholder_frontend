import axios from 'axios'
import Image from 'next/future/image'
import { useEffect, useState } from 'react'
import ResponsiveAppBar from 'src/common/components/ResponsiveAppBar'
import { baseURL } from 'src/common/const/URL'
import OptionCard from '../Project/components/Tabs/OptionTab/components/OptionCard'
import { initProjectValue } from '../Project/const'
import {
  EditIconButton,
  RootContainer,
  StyledEditIconImage,
  TabDivider,
  TabsContainer,
  TypographyWithFont,
} from './styled'
import { ConfirmPurchaseProps } from './types'
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded'
import ShareRoundedIcon from '@mui/icons-material/ShareRounded'
import Footer from 'src/common/components/Footer'
import { FileInput } from '@mantine/core'
import AddRoundedIcon from '@mui/icons-material/AddRounded'
import GradientButtonBackground from './components/gradientButtonBackground'
import { Button } from '@mui/material'

export default function ConfirmPurchase(
  ConfirmPurchaseProps: ConfirmPurchaseProps,
) {
  const { projectId, optionId } = ConfirmPurchaseProps
  const [project, setProject] = useState(initProjectValue)

  useEffect(() => {
    async function loadProjectData() {
      const res = await axios.get(`${baseURL}/project/${projectId}`)
      setProject(res.data)
    }
    if (projectId) loadProjectData()
  }, [projectId])
  const option = project.projectDetails.options[optionId]
  return (
    <RootContainer maxWidth={false} disableGutters>
      <ResponsiveAppBar background={'gradient'} page={'DISCOVER'} />
      <TabsContainer>
        <div
          style={{
            display: 'flex',
            padding: '10px 0px',
            flexDirection: 'column',
            gap: '10px',
          }}
        >
          <TypographyWithFont>{project.name}</TypographyWithFont>
          <div style={{ padding: '0px 10px' }}>
            {option && (
              <OptionCard
                title={option.title}
                desc={option.desc}
                price={option.price}
                descPrice={option.descPrice}
                pictures={option.picture}
                inx={optionId}
              />
            )}
          </div>
        </div>
        <TabDivider />
        <div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <TypographyWithFont
              sx={{ fontWeight: '400', fontSize: '13px', lineHeight: '20px' }}
            >
              ที่อยู่สำหรับจัดส่ง
            </TypographyWithFont>
            <EditIconButton onClick={() => {}}>
              <StyledEditIconImage>
                <Image
                  src={'/assets/images/user/editIcon.svg'}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </StyledEditIconImage>
            </EditIconButton>
          </div>
          <TypographyWithFont
            sx={{
              fontWeight: '300',
              fontSize: '12px',
              lineHeight: '19px',
              wordBreak: 'break-word',
              padding: '0px 15px',
            }}
          >
            asdbasiojbdoasjbdadassanodsadssoanoasndoasndiosnadosdosadnsadioasndasionasdiondiasndsandioasndioasdnaiodnasd
          </TypographyWithFont>
        </div>
        <TabDivider />
        <div
          style={{
            display: 'flex',
            gap: '10px',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <TypographyWithFont
            sx={{
              fontWeight: '400',
              fontSize: '13px',
              lineHeight: '20px',
              marginRight: 'auto',
            }}
          >
            QR code
          </TypographyWithFont>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <StyledEditIconImage
              sx={{
                width: '269px',
                height: '350px',
                border: '2px solid #A2B6D2',
                borderRadius: '10px',
              }}
            >
              <Image
                src={
                  'https://scontent.fbkk8-4.fna.fbcdn.net/v/t1.6435-9/90342099_2624042397811606_4595632650445651968_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=lmthQ6A_LXsAX-o3SUM&_nc_ht=scontent.fbkk8-4.fna&oh=00_AT8qB54vbDU6u448Bmxixwf-Usdejvx3StqHZnuUw05pLQ&oe=635AC96F'
                }
                fill
                style={{ objectFit: 'cover' }}
              />
            </StyledEditIconImage>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              <EditIconButton sx={{ ml: 'auto' }}>
                <DownloadRoundedIcon sx={{ color: 'rgba(0, 0, 0, 0.54)' }} />
              </EditIconButton>
              <EditIconButton>
                <ShareRoundedIcon sx={{ color: 'rgba(0, 0, 0, 0.54)' }} />
              </EditIconButton>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '14px',
            }}
          >
            <FileInput
              placeholder='หลักฐานการชำระเงิน'
              variant='filled'
              icon={
                <AddRoundedIcon sx={{ color: '#335381', fontSize: '15px' }} />
              }
              sx={{
                '	.mantine-FileInput-placeholder': {
                  fontFamily: 'Mitr',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '13px',
                  lineHeight: '20px',
                  color: '#335380',
                },
                '	.mantine-FileInput-input': {
                  fontFamily: 'Mitr',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '13px',
                  lineHeight: '20px',
                  color: '#335380',
                },
              }}
            />
            <Button
              sx={{
                color: 'rgba(128, 96, 183, 1)',
                width: '98px',
                height: '35px',
                borderRadius: '6px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  paddingTop: '5px',
                  paddingLeft: '4px',
                }}
              >
                <GradientButtonBackground />
              </div>
            </Button>
          </div>
        </div>
      </TabsContainer>
      <Footer />
    </RootContainer>
  )
}
