import { FileInput, Modal } from '@mantine/core'
import { Button, IconButton } from '@mui/material'
import axios from 'axios'
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage'
import Image from 'next/future/image'
import { useAuth } from 'Providers/FirebaseAuthProvider'
import { useEffect, useState } from 'react'
import { baseURL } from 'src/common/const/URL'
import {
  BackgroundCameraIcon,
  BackgroundImageContainer,
  CameraIconButton,
  StyledCameraIconImage,
  StyledCoverImage,
} from './styled'
import { BackgroundImageProps } from './types'

export default function BackgroundImage(
  backgroundImageProps: BackgroundImageProps,
) {
  const { editMode, backgroundPhotoURL } = backgroundImageProps

  const { authUser } = useAuth()
  const [openEditBackgroundImage, setOpenEditBackgroundImage] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [photoURL, setPhotoURL] = useState(backgroundPhotoURL)
  useEffect(() => {
    setPhotoURL(backgroundPhotoURL)
  }, [backgroundPhotoURL])
  const storage = getStorage()
  return (
    <BackgroundImageContainer>
      <Modal
        opened={openEditBackgroundImage}
        onClose={() => setOpenEditBackgroundImage(false)}
        title='Change Description'
        sx={{ marginTop: '80px' }}
      >
        <form
          onSubmit={e => {
            e.preventDefault()
            if (file && authUser) {
              const storageRef = ref(
                storage,
                `backgroundPhotoURL/${authUser.email}`,
              )
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
                        const resFromPatch = await axios.patch(
                          `${baseURL}/users/updateByUid/${authUser.uid}`,
                          { Profile: { backgroundPhotoURL: downloadURL } },
                        )
                        setPhotoURL(downloadURL)
                        // console.log(resFromPatch)
                        console.log('File available at', downloadURL)
                      }
                    }
                    updatePhoto()
                  })
                },
              )
            }
            setOpenEditBackgroundImage(false)
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
      <StyledCoverImage
        sx={{
          height: { xs: '200px', md: '300px' },
        }}
      >
        <Image
          src={
            photoURL || '/assets/images/project/projectDetail/coverImage.svg'
          }
          fill
          style={{ objectFit: 'cover' }}
        />
        {editMode && <BackgroundCameraIcon />}
        {editMode && (
          <CameraIconButton
            onClick={() => {
              setOpenEditBackgroundImage(true)
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
      </StyledCoverImage>
    </BackgroundImageContainer>
  )
}
