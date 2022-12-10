import React from 'react'
import { Link } from 'react-router-dom'

import CartBlock from '../CartBlock/CartBlock'

import './Header.scss'

const Header = () => {

  return (
    <header className="header">
      <Link to='/'>
        <div className="header__logo">
          <img src="img/logo.png" alt="" className="header__logo-img" />
          <div className="header__logo-text">
            <div className="header__logo-title">
              React Pizza
            </div>
            <div className="header__logo-subtitle">
              самая вкусная пицца во вселенной
            </div>
          </div>
        </div>
      </Link>
      <div className="header__cart">
        <Link to='/cart'>
          <CartBlock />         
        </Link>
      </div>
    </header>
  )
}

export default Header