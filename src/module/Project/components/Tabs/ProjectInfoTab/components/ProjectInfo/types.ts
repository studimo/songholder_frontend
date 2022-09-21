export type ProjectInfoProps = {
  projectInfo: {
    projectInfoId: number
    deadLine: Date
    status: ProjectStatusType
    // status: string
    responsiblePerson: string
    other: string
  }
  artistName: string
}
enum ProjectStatusType {
  Draft = 'Draft',
  Success = 'Success',
  InProgress = 'InProgress',
  Cancel = 'Cancel',
}
