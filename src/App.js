import React, { Fragment } from 'react'
import { useRoutes } from 'hookrouter'
import { routes } from './routes'
import Navbar from './components/Navbar'
import Alert from './components/Alert'

function App() {
  const routeResult = useRoutes(routes)

  return (
    <Fragment>
      <Navbar />
      <div className="container pt-4">
        {routeResult || (
          <Alert title="Error 404" text="Page not found!" type="danger" />
        )}
      </div>
    </Fragment>
  )
}

export default App
