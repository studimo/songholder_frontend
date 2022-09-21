import Project from 'src/module/Project'
import { useRouter } from 'next/router'

export default function ProjectDetail() {
  const router = useRouter()
  const { projectId } = router.query
  return <Project projectId={Number(projectId)} />
}
