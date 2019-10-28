import React, { Fragment, useContext } from 'react'
import { A, navigate } from 'hookrouter'
import { GoodsContext } from '../context/GoodsContext'
import { AuthContext } from '../context/AuthContext'

export default function Navbar() {
  const goodsContext = useContext(GoodsContext)
  const authContext = useContext(AuthContext)

  const logOut = () => {
    authContext.logOut()
    navigate('/login')
  }

  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
      <div className="navbar-brand">My Polygon</div>
      <ul className="navbar-nav ml-auto">
        {authContext.isAuth ? (
          <Fragment>
            <li className="nav-item">
              <A href="/" className="nav-link">
                Notes
              </A>
            </li>
            <li className="nav-item">
              <A href="/info" className="nav-link">
                Info
              </A>
            </li>
            <li className="nav-item">
              <A href="/goods" className="nav-link">
                Goods
              </A>
            </li>
            <li className="nav-item">
              <A href="/goods/basket" className="nav-link">
                Basket ({goodsContext.basketGoods.length})
              </A>
            </li>
            <li
              className="nav-link"
              style={{ cursor: 'pointer' }}
              onClick={logOut}
            >
              Logout
            </li>
          </Fragment>
        ) : (
          <Fragment>
            <li className="nav-item">
              <A href="/login" className="nav-link">
                Login
              </A>
            </li>
            <li className="nav-item">
              <A href="/registration" className="nav-link">
                Registration
              </A>
            </li>
          </Fragment>
        )}
      </ul>
    </nav>
  )
}
