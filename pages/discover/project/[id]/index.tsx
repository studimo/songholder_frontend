import { Box, Container, Typography } from '@mui/material'
import ResponsiveAppBar from 'src/common/components/ResponsiveAppBar'

export default function ProjectDetails() {
  const projectDetails = [
    { title: 'ศิลปิน', data: 'DRG' },
    { title: 'ประเภทอัลบัม', data: 'Single' },
    { title: 'วันที่ปล่อยอัลบัม', data: '27/03/2022' },
    { title: 'สถานะ', data: 'Draft' },
  ]
  const knotPositions = ['25%', '50%', '100%']
  return (
    <Container
      maxWidth={false}
      disableGutters
      // maxWidth="md"
      sx={{
        background:
          'radial-gradient(72.89% 72.89% at 24.52% 20.65%, #E4F6FC 0%, #F8F3FD 100%)',
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflow: 'hidden',
        paddingTop: '80px',
        gap: '20px',
      }}
    >
      <ResponsiveAppBar background={'gradient'} page={'PROJECT'} />
      <div
        style={{
          width: '85%',
          height: 'auto',
          marginTop: '20px',
          // backgroundColor: 'yellow'
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Mitr',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '22px',
            lineHeight: '35px',

            color: '#3C6196',
            mb: '12px',
          }}
        >
          DRG’s Project
        </Typography>
        <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
          <Box
            component='img'
            sx={{
              height: '140px',
              width: '140px',
            }}
            alt='LOGO'
            src='/assets/images/project/tmp.svg'
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '140px',
              // backgroundColor: 'purple',
              justifyContent: 'center',
              alignContent: 'center',
              marginLeft: '25px',
              gap: '6px',
            }}
          >
            {projectDetails.map(projectDetail => (
              <div
                key={projectDetail.title}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'Mitr',
                    fontStyle: 'normal',
                    fontWeight: 300,
                    fontSize: '13px',
                    lineHeight: '20px',

                    color: '#54729C',

                    mr: '5px',
                  }}
                >
                  {projectDetail.title}:
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Mitr',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '20px',
                    mb: '1px',

                    color: '#54729C',
                  }}
                >
                  {projectDetail.data}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        style={{
          position: 'relative',
          width: '85%',
          height: '15px',
          // backgroundColor: 'yellow',
          marginTop: '20px',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            background: '#E8E0F9',
            boxShadow: 'inset 2px 2px 3px -2px rgba(0, 0, 0, 0.25)',
            borderRadius: '46px',
            width: '100%',
            height: '6px',
          }}
        >
          {knotPositions.map(knotPosition => (
            <Box
              key={knotPosition}
              component='img'
              sx={{
                height: '10px',
                width: '10px',
                position: 'absolute',
                top: '-2.5px',
                left: knotPosition,
                transform: 'translate(-50%, 0%)',
              }}
              alt='LOGO'
              src='/assets/images/project/knot.svg'
            />
          ))}
        </div>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            boxShadow: 'inset 2px 2px 3px -2px rgba(0, 0, 0, 0.25)',
            borderRadius: '46px',
            width: '10%',
            height: '6px',
            background:
              'linear-gradient(270deg, #C487F4 -48.19%, rgba(46, 216, 253, 0.88) 96.1%)',
          }}
        />
      </div>
    </Container>
  )
}
