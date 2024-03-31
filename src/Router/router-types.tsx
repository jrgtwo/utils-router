export type RouterConfig = {
  routes: {
    [name: string]: {
      path: string,
      component: () => JSX.Element
    }
  },
  fallbackComponent: () => JSX.Element
}
export type RouteComponentParams = {
  path: string,
  component: () => JSX.Element,
  nowPath: string
}