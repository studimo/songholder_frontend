export type ProjectCardProps = {
  project: {
    projectId: number
    name: string
    desc: string
    currentBudget: number
    targetBudget: number
    song: {
      youtubeId: string
      artist: {
        Profile: {
          displayName: string
        }
      }
    }
    projectDetails: {
      projectInfo: {
        deadLine: Date
      }
    }
  }
  playerControl: {
    changeSong: Function
    songName: string
    onPlay: boolean
    audioUrl: string
  }
}
