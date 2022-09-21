export type ProjectImageCoverProps = {
  name: string
  youtubeId: string
  playerControl: {
    changeSong: Function
    songName: string
    onPlay: boolean
    audioUrl: string
  }
}
