import React, { useEffect } from 'react'
import { useRoutes } from 'hookrouter'
import { isAuthRoutes, notAuthRoutes } from './routes'
import { useLocalStore, useObserver } from 'mobx-react-lite'
import { goodsService } from './services/goodsService'
import { GlobalContext } from './context/GlobalContext'
import { authService } from './services/authService'
import Navbar from './components/Navbar'
import Alert from './components/Alert'

export default function App() {
  const service = useLocalStore(() => goodsService)
  const auth = useLocalStore(() => authService)

  const routeIsAuthResult = useRoutes(isAuthRoutes)
  const routeNotAuthResult = useRoutes(notAuthRoutes)

  useEffect(() => {
    if (localStorage.getItem('userId')) {
      auth.isAuth = true
    }
  }, [])

  const routeRenders = () => {
    if (auth.isAuth) {
      return routeIsAuthResult
    } else {
      return routeNotAuthResult
    }
  }

  return useObserver(() => (
    <GlobalContext.Provider
      value={{
        goods: service.goods,
        basketGoods: service.basketGoods,
        getGoods: service.getGoods,
        addToBasket: service.addToBasket,
        decrementGood: service.decrementGood,
        removeFromBasket: service.removeFromBasket,
        clearBasket: service.clearBasket,
        totalSum: service.totalSum,
        loading: service.loading,
        isAuth: auth.isAuth,
        logIn: auth.logIn,
        logOut: auth.logOut,
      }}
    >
      <Navbar />
      <div className="container pt-4">
        {routeRenders() || (
          <Alert title="Error 404" text="Page not found!" type="danger" />
        )}
      </div>
    </GlobalContext.Provider>
  ))
}
