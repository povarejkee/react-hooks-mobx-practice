import React from 'react'
import { A } from 'hookrouter'

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
      <div className="navbar-brand">My Notes</div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <A href="/" className="nav-link">
            Home
          </A>
        </li>
        <li className="nav-item">
          <A href="/info" className="nav-link">
            Info
          </A>
        </li>
      </ul>
    </nav>
  )
}
