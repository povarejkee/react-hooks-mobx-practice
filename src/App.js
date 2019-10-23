import React from 'react'
import { useRoutes } from 'hookrouter'
import { routes } from './routes'
import Navbar from './components/Navbar'
import Alert from './components/Alert'
import { useLocalStore, useObserver } from 'mobx-react-lite'
import { goodsService } from './services/goodsService'
import { GoodsContext } from './context/GoodsContext'

function App() {
  const service = useLocalStore(() => goodsService)
  const routeResult = useRoutes(routes)

  return useObserver(() => (
    <GoodsContext.Provider
      value={{
        goods: service.goods,
        basketGoods: service.basketGoods,
        getGoods: service.getGoods,
        addToBasket: service.addToBasket,
        decrementGood: service.decrementGood,
        removeFromBasket: service.removeFromBasket,
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
  ))
}

export default App
