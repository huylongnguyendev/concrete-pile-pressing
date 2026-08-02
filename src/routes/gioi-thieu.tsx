import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/gioi-thieu')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/gioi-thieu"!</div>
}
