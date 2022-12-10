import React from 'react'
import { useSelector } from 'react-redux'
import './CartBlock.scss'

const CartBlock = () => {
  const { totalPrice, items } = useSelector((state) => state.cart)

  const totalCount = items.reduce((sum, item) => sum + item.count, 0)

  return (
    <div className='cart-block'>
      <span className="cart-block__price">
        {totalPrice} ₽
      </span>
      <div className="cart-block__line"></div>
      <div className="cart-block__right">
        <img src="img/cart-icon.svg" alt="" className="cart-block__icon" />
        <span className="cart-block__quantity">
          {totalCount}
        </span>
      </div>
    </div>
  )
}

export default CartBlock