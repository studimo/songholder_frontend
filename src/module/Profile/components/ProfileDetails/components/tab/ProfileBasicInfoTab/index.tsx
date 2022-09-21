import Image from 'next/future/image'
import FollowerAndLike from './components/FollowerAndLike'
import MusicExperienceTab from '../MusicExperienceTab'
import MusicPersonalityTab from '../MusicPersonalityTab'
import {
  BalanceCenterBox,
  EditIconButton,
  ProfileBasicInfoTabContainer,
  ProfileDescContainer,
  ProfileNameContainer,
  StyledEditIconImage,
  TypographyWithFont,
} from './styled'
import { ProfileBasicInfoTabProps } from './types'
import { Modal, TextInput } from '@mantine/core'
import { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import axios from 'axios'
import { useAuth } from 'Providers/FirebaseAuthProvider'
import { baseURL } from 'src/common/const/URL'

export default function ProfileBasicInfoTab(
  profileBasicInfoTabProps: ProfileBasicInfoTabProps,
) {
  const { authUser } = useAuth()
  const { editMode, user } = profileBasicInfoTabProps
  const [openEditDisplayName, setOpenEditDisplayName] = useState(false)
  const [displayName, setDisplayName] = useState(user.Profile.displayName)

  const [openEditDesc, setOpenEditDesc] = useState(false)
  const [desc, setDesc] = useState(user.Profile.desc)
  useEffect(() => {
    if (user) {
      setDisplayName(user.Profile.displayName)
      setDesc(user.Profile.desc)
    }
  }, [user])
  return (
    <ProfileBasicInfoTabContainer>
      <Modal
        opened={openEditDisplayName}
        onClose={() => setOpenEditDisplayName(false)}
        title='Change Display Name'
        sx={{ marginTop: '80px' }}
      >
        <form
          onSubmit={e => {
            e.preventDefault()
            setOpenEditDisplayName(false)
            async function updateDisplayName() {
              if (authUser) {
                // const res = await axios.get(
                //   `${baseURL}/users/findByUid/${authUser.uid}`,
                // )
                // const userId = res.data.userId
                // const resFromPatch = await axios.patch(
                //   `${baseURL}/users/${userId}`,
                //   { Profile: { displayName: displayName } },
                // )
                const resFromPatch = await axios.patch(
                  `${baseURL}/users/updateByUid/${authUser.uid}`,
                  { Profile: { displayName: displayName } },
                )
                // console.log(resFromPatch)
              }
            }
            updateDisplayName()
          }}
        >
          <TextInput
            placeholder='name'
            label='New Display Name'
            radius='sm'
            withAsterisk
            value={displayName}
            onChange={event => setDisplayName(event.currentTarget.value)}
          />
          <Button variant='outlined' type='submit' sx={{ marginTop: '10px' }}>
            Confirm
          </Button>
        </form>
      </Modal>

      <Modal
        opened={openEditDesc}
        onClose={() => setOpenEditDesc(false)}
        title='Change Description'
        sx={{ marginTop: '80px' }}
      >
        <form
          onSubmit={e => {
            e.preventDefault()
            setOpenEditDesc(false)
            async function updateDesc() {
              if (authUser) {
                // const res = await axios.get(
                //   `${baseURL}/users/findByEmail/${authUser.email}`,
                // )
                // const userId = res.data.userId
                // const resFromPatch = await axios.patch(
                //   `${baseURL}/users/${userId}`,
                //   { Profile: { desc: desc } },
                // )

                const resFromPatch = await axios.patch(
                  `${baseURL}/users/updateByUid/${authUser.uid}`,
                  { Profile: { desc: desc } },
                )
                // console.log(resFromPatch)
              }
            }
            updateDesc()
          }}
        >
          <TextInput
            placeholder='description'
            label='New Description'
            radius='sm'
            withAsterisk
            value={desc}
            onChange={event => setDesc(event.currentTarget.value)}
          />
          <Button variant='outlined' type='submit' sx={{ marginTop: '10px' }}>
            Confirm
          </Button>
        </form>
      </Modal>
      <ProfileNameContainer>
        {editMode && <BalanceCenterBox />}
        <TypographyWithFont sx={{ fontSize: '22px', fontWeight: 600 }}>
          {displayName || user.email || '~'}
        </TypographyWithFont>
        {editMode && (
          <EditIconButton
            onClick={() => {
              setOpenEditDisplayName(true)
            }}
          >
            <StyledEditIconImage>
              <Image
                src={'/assets/images/user/editIcon.svg'}
                fill
                style={{ objectFit: 'cover' }}
              />
            </StyledEditIconImage>
          </EditIconButton>
        )}
      </ProfileNameContainer>
      <ProfileDescContainer>
        {editMode && <BalanceCenterBox />}
        <TypographyWithFont
          sx={{ fontSize: '13px', fontWeight: 400, color: '#A278BC' }}
        >
          {desc || '~'} {'>'}
        </TypographyWithFont>
        {editMode && (
          <EditIconButton
            sx={{ mt: '-2px' }}
            onClick={() => {
              setOpenEditDesc(true)
            }}
          >
            <StyledEditIconImage>
              <Image
                src={'/assets/images/user/editIcon.svg'}
                fill
                style={{ objectFit: 'cover' }}
              />
            </StyledEditIconImage>
          </EditIconButton>
        )}
      </ProfileDescContainer>
      <FollowerAndLike />
    </ProfileBasicInfoTabContainer>
  )
}
