import React, { useEffect, useContext } from 'react'
import { useLocalStore, useObserver } from 'mobx-react-lite'
import { goodsService } from './services/goodsService'
import { GlobalContext } from './context/GlobalContext'
import { authService } from './services/authService'
import Navbar from './components/Navbar'
import Alert from './components/Alert'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegistrationPage from './pages/RegistrationPage'
import NotesPage from './pages/NotesPage'
import NoteDetails from './pages/NoteDetails'
import NoteEdit from './pages/NoteEdit'
import InfoPage from './pages/InfoPage'
import GoodsPage from './pages/GoodsPage'
import BasketPage from './pages/BasketPage'

const PrivateRouteIsAuth = ({ component: Component, ...rest }) => {
  const { isAuth } = useContext(GlobalContext)

  return (
    <Route
      {...rest}
      render={props =>
        isAuth ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  )
}

const PrivateRouteIsNotAuth = ({ component: Component, ...rest }) => {
  const { isAuth } = useContext(GlobalContext)

  return (
    <Route
      {...rest}
      render={props =>
        !isAuth ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  )
}

export default function App() {
  const service = {
    goods: useLocalStore(() => goodsService),
    auth: useLocalStore(() => authService),
  }

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
      <Router>
        <Navbar />
        <div className="container pt-4">
          <Switch>
            {/** Не авторизован */}
            <PrivateRouteIsNotAuth path="/login" component={LoginPage} />
            <PrivateRouteIsNotAuth
              path="/registration"
              component={RegistrationPage}
            />

            {/** Авторизован */}
            <PrivateRouteIsAuth
              exact
              path={['/', '/info']}
              component={InfoPage}
            />
            <PrivateRouteIsAuth exact path="/notes" component={NotesPage} />
            <PrivateRouteIsAuth
              exact
              path="/notes/:id"
              component={NoteDetails}
            />
            <PrivateRouteIsAuth
              exact
              path="/notes/edit/:id"
              component={NoteEdit}
            />
            <PrivateRouteIsAuth path="/goods" component={GoodsPage} />
            <PrivateRouteIsAuth path="/basket" component={BasketPage} />

            {/** Страница не найдена */}
            <Route>
              <Alert title="Error 404" text="Page not found!" type="danger" />
            </Route>
          </Switch>
        </div>
      </Router>
    </GlobalContext.Provider>
  ))
}
