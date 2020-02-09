import React, { useEffect } from 'react'
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
          {!service.auth.isAuth ? (
            <Switch>
              <Redirect from="*" to="/login" />
              {/* Почему этот редирект срабатывает в обоих условиях? */}
              <Route path="/login">
                <LoginPage />
              </Route>
              <Route path="/registration">
                <RegistrationPage />
              </Route>
            </Switch>
          ) : (
            <Switch>
              <Redirect exact from="/" to="/info" /> {/* Игнорируется */}
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
              <Route>
                <Alert title="Error 404" text="Page not found!" type="danger" />
              </Route>
            </Switch>
          )}
        </div>
      </Router>
    </GlobalContext.Provider>
  ))
}
