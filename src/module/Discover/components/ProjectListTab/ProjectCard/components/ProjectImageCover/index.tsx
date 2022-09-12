import Image from 'next/future/image'
export default function ProjectImageCover() {
  return (
    <div
      style={{
        display: 'flex',
        position: 'absolute',
        left: '0px',
        width: '100px',
        height: '100%',
        overflow: 'hidden',
        // backgroundColor: 'yellowgreen',
      }}
    >
      <Image
        src='/assets/images/project/projectDetail/coverImage.svg'
        alt='Logo_IG'
        fill
        style={{ objectFit: 'cover' }}
      />
    </div>
  )
}
