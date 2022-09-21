import { FileInput, Modal, TextInput } from '@mantine/core'
import { Button } from '@mui/material'
import axios from 'axios'
import Image from 'next/future/image'
import { useAuth } from 'Providers/FirebaseAuthProvider'
import { useEffect, useState } from 'react'
import {
  BackgroundCameraIcon,
  BackgroundProfileImage,
  CameraIconButton,
  ProfileContainer,
  StyledCameraIconImage,
  StyledProfileImage,
} from './styled'
import { ProfileImageProps } from './types'
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from 'firebase/storage'
import { baseURL } from 'src/common/const/URL'

export default function ProfileImage(profileImageProps: ProfileImageProps) {
  const { authUser } = useAuth()
  const { editMode, userPhotoURL } = profileImageProps
  const [openEditProfileImage, setOpenEditProfileImage] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [photoURL, setPhotoURL] = useState(userPhotoURL)
  useEffect(() => {
    setPhotoURL(userPhotoURL)
  }, [userPhotoURL])
  const storage = getStorage()
  return (
    <ProfileContainer>
      <Modal
        opened={openEditProfileImage}
        onClose={() => setOpenEditProfileImage(false)}
        title='Change Description'
        sx={{ marginTop: '80px' }}
      >
        <form
          onSubmit={e => {
            e.preventDefault()
            if (file && authUser) {
              const storageRef = ref(storage, `userPhotoURL/${authUser.email}`)
              const uploadTask = uploadBytesResumable(storageRef, file)
              uploadTask.on(
                'state_changed',
                snapshot => {
                  const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                  // console.log('Upload is ' + progress + '% done')
                  switch (snapshot.state) {
                    case 'paused':
                      // console.log('Upload is paused')
                      break
                    case 'running':
                      // console.log('Upload is running')
                      break
                  }
                },
                error => {},
                () => {
                  getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
                    async function updatePhoto() {
                      if (authUser) {
                        // const res = await axios.get(
                        //   `${baseURL}/users/findByUid/${authUser.uid}`,
                        // )
                        // const userId = res.data.userId
                        // const resFromPatch = await axios.patch(
                        //   `${baseURL}/users/${userId}`,
                        //   { Profile: { userPhotoURL: downloadURL } },
                        // )
                        const resFromPatch = await axios.patch(
                          `${baseURL}/users/updateByUid/${authUser.uid}`,
                          { Profile: { userPhotoURL: downloadURL } },
                        )
                        setPhotoURL(downloadURL)
                        // console.log(resFromPatch)
                        // console.log('File available at', downloadURL)
                      }
                    }
                    updatePhoto()
                  })
                },
              )
            }
            setOpenEditProfileImage(false)
          }}
        >
          <FileInput
            label='Upload files'
            placeholder='Upload files'
            accept='image/png,image/jpeg'
            value={file}
            onChange={setFile}
          />
          <Button variant='outlined' type='submit' sx={{ marginTop: '10px' }}>
            Confirm
          </Button>
        </form>
      </Modal>
      <BackgroundProfileImage />
      <StyledProfileImage>
        <Image
          src={
            photoURL || '/assets/images/project/projectDetail/artistImage.svg'
          }
          fill
          style={{ objectFit: 'cover' }}
          referrerPolicy='no-referrer'
        />
        {editMode && <BackgroundCameraIcon />}
        {editMode && (
          <CameraIconButton
            onClick={() => {
              setOpenEditProfileImage(true)
            }}
          >
            <StyledCameraIconImage>
              <Image
                src={'/assets/images/user/cameraIcon.svg'}
                fill
                style={{ objectFit: 'cover' }}
              />
            </StyledCameraIconImage>
          </CameraIconButton>
        )}
      </StyledProfileImage>
    </ProfileContainer>
  )
}
