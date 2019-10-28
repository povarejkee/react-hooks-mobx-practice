import React, { useEffect } from 'react'
import { navigate, useRoutes } from 'hookrouter'
import { routes } from './routes'
import Navbar from './components/Navbar'
import Alert from './components/Alert'
import { useLocalStore, useObserver } from 'mobx-react-lite'
import { goodsService } from './services/goodsService'
import { GoodsContext } from './context/GoodsContext'
import { AuthContext } from './context/AuthContext'
import { authService } from './services/authService'

function App() {
  const service = useLocalStore(() => goodsService)
  const auth = useLocalStore(() => authService)
  const routeResult = useRoutes(routes)

  useEffect(() => {
    if (localStorage.getItem('userId')) {
      auth.isAuth = true
    } else {
      navigate('/login')
    }
  }, [])

  return useObserver(() => (
    <AuthContext.Provider
      value={{
        isAuth: auth.isAuth,
        logIn: auth.logIn,
        logOut: auth.logOut, //todo разнести контекст по-нормальному. Щас полная хуета
      }}
    >
      <GoodsContext.Provider
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
        }}
      >
        <Navbar />
        <div className="container pt-4">
          {routeResult || (
            <Alert title="Error 404" text="Page not found!" type="danger" />
          )}
        </div>
      </GoodsContext.Provider>
    </AuthContext.Provider>
  ))
}

export default App
