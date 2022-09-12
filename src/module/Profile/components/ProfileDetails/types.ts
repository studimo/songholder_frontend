export type ProfileDetailsProps = {
  editMode: boolean
  user: {
    userId: number
    email: string
    Profile: {
      desc: string
      displayName: string
    }
  }
}
