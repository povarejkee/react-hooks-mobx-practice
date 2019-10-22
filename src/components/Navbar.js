import React, { useContext } from 'react'
import { A } from 'hookrouter'
import { GoodsContext } from '../context/GoodsContext'

export default function Navbar() {
  const context = useContext(GoodsContext)

  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
      <div className="navbar-brand">My Polygon</div>
      <ul className="navbar-nav">
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
      </ul>
    </nav>
  )
}
