import React from 'react'
import { Link } from 'react-router-dom'
import "./header.scss"

function Header() {
  return (
    <header className="header">
        <div className="container">
            <div className="header__inner">
                <Link className="header__logo logo" to="/">CAFE.</Link>
                <nav className="navbar header__navbar">
                  <ul className="navbar__list">
                    <li className="navbar__item">
                      <Link className="navbar__link" to="/menu">Меню</Link>
                    </li>
                    <li className="navbar__item">
                      <Link className="navbar__link" to="/book">Забронировать столик</Link>
                    </li>
                  </ul>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Header