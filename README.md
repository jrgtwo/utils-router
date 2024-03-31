# utils-router

use in an application as a component
- Pass configuration to control pathing
```
<Router
  config={{
    routes: {
      home: {
        path: '/',
        component: Home
      },
      todo: {
        path: '/todo',
        component: Todo
      }
    },
    fallbackComponent: Home
  }}
/>
```

The Config is an object where the keys are the named path
```
{
  HOME: {
    path: '/',
    component: Home
  }
}
```

The `path` is a url path as a string, currently exact matches only. Further functionality may be added later
The `component` is the React component you want to render for the given `path`

To navigate and trigger the router use Router.Navigate
```
const onClick = (path: string) => (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault()
  Router.Navigate({ path })
}
```

Full Usage example
```
export default function App() {

  const onClick = (path: string) => (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    Router.Navigate({ path })
  }

  return (
    <main>
      <nav>
        <button onClick={onClick('/')}>Home</button>
        <button onClick={onClick('/todo')}>Todos</button>
      </nav>

      <Router
        config={{
          routes: {
            home: {
              path: '/',
              component: Home
            },
            todo: {
              path: '/todo',
              component: Todo
            }
          },
          fallbackComponent: Home
        }} />
    </main >
  )
}
```


