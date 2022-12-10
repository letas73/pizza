import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem, minusItem, removeItem } from '../../redux/Cart/cart'

import './CartItem.scss'

const CartItem = ({ id, price, name, imageUrl, count, type, size }) => {
  const dispatch = useDispatch()
  
  const onClickPlus = () => {
    dispatch(addItem({
      id,
    }))
  }

  const onClickMinus = () => {
    if (count > 1) {
      dispatch(minusItem(id))
    } else {
      dispatch(removeItem(id))
    }
  }

  const onClickRemove = () => {
    dispatch(removeItem(id))
  }

  return (
    <li className='cart-item'>
      <div className="cart-item__info">
        <img src={imageUrl} alt="" className="cart-item__img" />
        <div className="cart-item__info-right">
          <div className="cart-item__title">
            {name}
          </div>
          <div className="cart-item__view">
            {type}, {size} см.
          </div>
        </div>
      </div>
      <div className="cart-item__counter">
        <button className="cart-item__counter-btn" onClick={onClickMinus}>
          -
        </button>
        <div className="cart-item__counter-current">
          {count}
        </div>
        <button className="cart-item__counter-btn" onClick={onClickPlus}>
          +
        </button>
      </div>
      <div className="cart-item__price">
        {price * count} ₽ 
      </div>
      <button className="cart-item__delete" onClick={onClickRemove}>
        <span className="cart-item__delete-icon"></span>
      </button>
    </li>
  )
}

export default CartItem