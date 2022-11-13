export type ProjectInfoTabProps = {
  projectInfo: {
    projectInfoId: number
    deadLine: Date
    status: ProjectStatusType
    // status: string
    responsiblePerson: string
    other: string
    artist: string
    type: string
  }
  artistName: string
}
enum ProjectStatusType {
  Draft = 'Draft',
  Success = 'Success',
  InProgress = 'InProgress',
  Cancel = 'Cancel',
}
