import React, { useEffect } from 'react'
import { useRoutes } from 'hookrouter'
import { routes } from './routes'
import { useLocalStore, useObserver } from 'mobx-react-lite'
import { goodsService } from './services/goodsService'
import { GlobalContext } from './context/GlobalContext'
import { authService } from './services/authService'
import Navbar from './components/Navbar'
import Alert from './components/Alert'

export default function App() {
  const service = {
    goods: useLocalStore(() => goodsService),
    auth: useLocalStore(() => authService),
  }

  const routeResult = useRoutes(routes)

  useEffect(() => {
    if (localStorage.getItem('userId')) {
      service.auth.isAuth = true
    }
  }, [])

  return useObserver(() => (
    <GlobalContext.Provider
      value={{
        goods: service.goods.goods,
        basketGoods: service.goods.basketGoods,
        getGoods: service.goods.getGoods,
        addToBasket: service.goods.addToBasket,
        removeFromBasket: service.goods.removeFromBasket,
        clearBasket: service.goods.clearBasket,
        totalSum: service.goods.totalSum,
        loading: service.goods.loading,
        isAuth: service.auth.isAuth,
        logIn: service.auth.logIn,
        logOut: service.auth.logOut,
      }}
    >
      <Navbar />
      <div className="container pt-4">
        {routeResult || (
          <Alert title="Error 404" text="Page not found!" type="danger" />
        )}
      </div>
    </GlobalContext.Provider>
  ))
}
