import React from 'react'

import './Categories.scss'

const Categories = ({value, onChangeCategory}) => {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые',]

  const onClickCategories = (index) => {
    onChangeCategory(index)
  }

  return (
    <ul className='categories'>
      {
        categories.map((cat, index) => (
          <li className={index === value ? 'active' : ''} key={`${cat}_${index}`} onClick={() => onClickCategories(index)}>
            {cat}
          </li>
        ))
      }
    </ul>
  )
}

export default Categories