import { useRouter } from 'next/router'
import ConfirmPurchase from 'src/module/ConfirmPurchase'

export default function ProjectDetail() {
  const router = useRouter()
  const { projectId, optionId } = router.query
  return (
    <ConfirmPurchase
      projectId={Number(projectId)}
      optionId={Number(optionId)}
    />
  )
}
