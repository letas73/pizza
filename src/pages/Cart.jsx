import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartEmpty from '../components/CartEmpty/CartEmpty'

import CartItem from '../components/CartItem/CartItem'
import { clearItems } from '../redux/Cart/cart'

const Cart = () => {
  const dispatch = useDispatch()
  const { items, totalPrice } = useSelector((state) => state.cart)
  const totalCount = items.reduce((sum, item) => sum + item.count, 0)


  const onClickClearCart = () => {
    dispatch(clearItems())
  }

  if (!items.length) {
    return <CartEmpty />
  }

  return (
    <div className='cart'>
      <div className="cart__header">
        <div className="cart__title">
          <img src="img/cart-page-icon.svg" alt="" className="cart__title-icon" />
          <h1 className="cart__title-text">
            Корзина
          </h1>
        </div>
        <button className="cart__clear" onClick={onClickClearCart}>
          <img src="img/cart-clear-icon.svg" alt="" className="cart__clear-icon" />
          <span className="cart__clear-text">
            Очистить корзину
          </span>
        </button>
      </div>
      <ul className="cart__list">
        {
          items.map((obj) => (
            <CartItem key={obj.id} {...obj} />
          ))
        }
      </ul>
      <div className="cart__footer">
        <div className="cart__quantity">
          Всего пицц: <span>{totalCount} шт.</span>
        </div>
        <div className="cart__totalprice">
          Сумма заказа: <span>{totalPrice} ₽</span>
        </div>
      </div>
      <div className="cart__nav">
        <Link to='/'>
          <div className="cart__nav-link">
            <img src="img/cart-nav-arrow.svg" alt="" className="cart__nav-link-arrow" />
            <div className="cart__nav-link-text">
              Вернуться назад
            </div>
          </div>
        </Link>
        <button className="cart__nav-order">
          Оплатить сейчас
        </button>
      </div>
    </div>
  )
}

export default Cart