import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addItem } from '../../redux/Cart/cart'

import './CardItem.scss'

const CardItem = ({ id, imageUrl, name, types, sizes, price }) => {
  const typesName = ['тонкое', 'традиционное']
  const [activeType, setActiveType] = useState(0)
  const [activeSize, setActiveSize] = useState(0)
  const dispatch = useDispatch()

  const onClickType = (typeId) => {
    setActiveType(typeId)
  }

  const onClickSize = (index) => {
   setActiveSize(index)
  }

  const onClickAdd = () => {
    const item = {
      id,
      price,
      imageUrl, 
      name,
      type: typesName[activeType],
      size: sizes[activeSize]
    }
    dispatch(addItem(item))
  }

  return (
    <li className='card-item'>
      <div className="card-item__preview">
        <img src={imageUrl} alt="" className="card__img" />
      </div>
      <div className="card-item__title">
        {name}
      </div>
      <div className="card-item__switcher">
        <ul className="card-item__dough">
          {
            types.map((typeId) => (
              <li key={typeId} onClick={() => onClickType(typeId)} className={activeType === typeId ? 'active' : ''}>
                {typesName[typeId]}
              </li>
            ))
          }
        </ul>
        <ul className="card-item__size">
          {
            sizes.map((size, index) => (
              <li key={`${size}_${index}`} onClick={() => onClickSize(index)} className={activeSize === index ? 'active' : ''}>
                {size} см.
              </li>
            ))
          }
        </ul>
      </div>
      <div className="card-item__footer">
        <div className="card-item__price">
          от {price} ₽
        </div>
        <button className="card-item__btn" onClick={onClickAdd}>
          <div className="card-item__btn-icon"></div>
          <span className="card-item__btn-text">
            Добавить 
          </span>
        </button>
      </div>
    </li> 
  )
}

export default CardItem