import React from 'react'
import { Link } from 'react-router-dom'

import './CartEmpty.scss'

const CartEmpty = () => {
  return (
    <div className='cart-empty'>
      <h1 className="cart-empty__title">
        Корзина пустая 😕
      </h1>
      <p className="cart-empty__descr">
        Вероятней всего, вы не заказывали ещё пиццу. <br /> Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img src="img/cart-empty-img.png" alt="" className="cart-empty__img" />
      <Link to='/' className='cart-empty__link'>
        Вернуться назад
      </Link>
    </div>
  )
}

export default CartEmpty