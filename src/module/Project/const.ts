enum ProjectStatusType {
  Draft = 'Draft',
  Success = 'Success',
  InProgress = 'InProgress',
  Cancel = 'Cancel',
}

export const initProjectValue = {
  projectId: 0,
  name: '',
  desc: '',
  currentBudget: 0,
  targetBudget: 0,
  coverImageUrl: '',
  owner: {
    Profile: {
      displayName: '',
      userPhotoURL: '',
    },
  },
  projectDetails: {
    knotDetails: [
      {
        knotDetailId: 0,
        knotValue: 0,
        knotName: '',
        knotDesc: '',
      },
    ],
    projectInfo: {
      projectInfoId: 1,
      deadLine: new Date('2020-12-31'),
      status: ProjectStatusType.Draft,
      // status: 'Draft',
      responsiblePerson: '',
      other: '',
    },
    toListener: '',
    timelineDatas: [
      {
        timeLineDataId: 1,
        date: new Date('2020-12-31'),
        title: '',
        desc: '',
      },
    ],
    options: [
      {
        optionId: 0,
        title: '',
        desc: '',
        price: 0,
        descPrice: '',
        picture: [''],
      },
    ],
  },
}
