import React, { useEffect, useRef, useState } from 'react'

import './Sort.scss'

const Sort = ({ value, onChangeSort }) => {
  const sortRef = useRef()
  const sort = [
    { name: 'популярности', sortProperty: 'rating' },
    { name: 'цене', sortProperty: 'price' },
    { name: 'алфавиту', sortProperty: 'name' }
  ]
  const [openMenu, setOpenMenu] = useState(false)

  useEffect(() => {
    const handleClickOutSide = (event) => {
      if (!event.path.includes(sortRef.current)) {
        setOpenMenu(false)
      }
    }

    document.body.addEventListener("click", handleClickOutSide)

    return () => {
      document.body.removeEventListener('click', handleClickOutSide)
    }
  }, [])

  const onClickSortItem = (obj) => {
    onChangeSort(obj)
    setOpenMenu(false)
  }

  return (
    <div ref={sortRef} className='sort'>
      <div className="sort__cont">
        <div className="sort__caption" onClick={() => setOpenMenu(!openMenu)}>
          <img src="img/sort-icon.svg" alt="" className={openMenu ? 'active' : ''} />
          <span className="sort__caption-text">
            Сортировка по:
          </span>
        </div>
        <div className="sort__label">
          {value.name}
        </div>
      </div>
      {openMenu && <ul className="sort__menu">
        {
          sort.map((obj, i) => (
            <li key={i} onClick={() => onClickSortItem(obj)} className={value.sortProperty === obj.sortProperty ? 'active' : ''}>
              {obj.name}
            </li>
          ))
        }
      </ul>}
    </div>
  )
}

export default Sort