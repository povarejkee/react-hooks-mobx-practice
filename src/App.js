import React, { Fragment, useEffect } from 'react'
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
    <Router>
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
          <Switch>
            {!service.auth.isAuth ? (
              <Fragment>
                <Route path="/login">
                  <LoginPage />
                </Route>
                <Route path="/registration">
                  <RegistrationPage />
                </Route>
                <Route path="*">
                  <Redirect to="/login" />
                  {/* какого хера редиректит даже при isAuth === true? */}
                </Route>
              </Fragment>
            ) : (
              <Fragment>
                <Route path="/notes" exact>
                  <NotesPage />
                </Route>
                <Route path="/notes/:id" exact>
                  <NoteDetails />
                </Route>
                <Route path="/notes/edit/:id">
                  <NoteEdit />
                </Route>
                <Route path="/info">
                  <InfoPage />
                </Route>
                <Route path="/goods">
                  <GoodsPage />
                </Route>
                <Route path="/basket">
                  <BasketPage />
                </Route>
                <Route path="/" exact>
                  <Redirect to="/info" />
                  {/* этот редирект игнорится и срабатывает редирект из условия сверху */}
                </Route>
                <Route path="*">
                  <Alert
                    title="Error 404"
                    text="Page not found!"
                    type="danger"
                  />
                  {/* какого хера показывается всегда? */}
                </Route>
              </Fragment>
            )}
          </Switch>
        </div>
      </GlobalContext.Provider>
    </Router>
  ))
}
