import { useEffect, useState } from 'react'
import { Route } from './Route.js'
import type { RouterConfig } from './router-types'

const RouterComponent = ({ config, }: { config: RouterConfig }) => {

  const [currPath, setCurrPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrPath(window.location.pathname);
    };
    window.addEventListener('navigate', onLocationChange);
    return () => window.removeEventListener('navigate', onLocationChange);
  }, [])

  const {
    routes
  } = config

  const routeList = []

  for (const route in routes) {
    routeList.push(
      (
        <Route
          path={routes[route].path}
          component={routes[route].component}
          nowPath={currPath}
          key={routes[route].path} />
      )
    )
  }

  return <>{routeList}</>
}

export type RouterNavigationParams = {
  path: string,
  data?: object,
}

RouterComponent.Navigate = ({ path, data = {} }: RouterNavigationParams) => {
  window.history.pushState(data, 'navigate', path)
  const navigationEvent = new PopStateEvent("navigate");
  window.dispatchEvent(navigationEvent);
}

export const Router = RouterComponent

