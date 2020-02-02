import React, { Fragment, useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { NavLink, useHistory } from 'react-router-dom'

export default function Navbar() {
  const context = useContext(GlobalContext)
  const history = useHistory()

  const logOut = () => {
    context.logOut()
    history.push('/login')
  }

  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
      <div className="navbar-brand">My Polygon</div>
      <ul className="navbar-nav ml-auto">
        {context.isAuth ? (
          <Fragment>
            <li className="nav-item">
              <NavLink to="/notes" className="nav-link">
                Notes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/info" className="nav-link">
                Info
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/goods" className="nav-link">
                Goods
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/basket" className="nav-link">
                Basket ({context.basketGoods.length})
              </NavLink>
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
              <NavLink to="/login" className="nav-link">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/registration" className="nav-link">
                Registration
              </NavLink>
            </li>
          </Fragment>
        )}
      </ul>
    </nav>
  )
}
