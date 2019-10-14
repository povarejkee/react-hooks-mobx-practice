import React, { Fragment } from 'react'
import { useRoutes, useRedirect } from 'hookrouter'
import { routes } from './routes'
import Navbar from './components/Navbar'
import NotFound from './pages/NotFound'

function App() {
  const routeResult = useRoutes(routes)
  useRedirect('/', '/home')

  return (
    <Fragment>
      <Navbar />
      <div className="container pt-4">{routeResult || <NotFound />}</div>
    </Fragment>
  )
}

export default App
