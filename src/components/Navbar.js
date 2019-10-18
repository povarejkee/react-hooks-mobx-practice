import React from 'react'
import { A } from 'hookrouter'

export default function Navbar() {
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
      </ul>
    </nav>
  )
}
