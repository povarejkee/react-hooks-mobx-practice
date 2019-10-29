import React, { Fragment, useContext } from 'react'
import { A, navigate } from 'hookrouter'
import { GlobalContext } from '../context/GlobalContext'

export default function Navbar() {
  const context = useContext(GlobalContext)

  const logOut = () => {
    context.logOut()
    navigate('/login')
  }

  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
      <div className="navbar-brand">My Polygon</div>
      <ul className="navbar-nav ml-auto">
        {context.isAuth ? (
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
                Basket ({context.basketGoods.length})
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
