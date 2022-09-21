export type TrackBarProps = {
  knotDetails: {
    knotDetailId: number
    knotValue: number
    knotName: string
    knotDesc: string
  }[]
  currentBudget: number
  targetBudget: number
}
