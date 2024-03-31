import { RouteComponentParams } from './router-types'

const RouteComponent = ({ path, component, nowPath }: RouteComponentParams) => (
  path === nowPath
    ? component()
    : null
)

export const Route = RouteComponent