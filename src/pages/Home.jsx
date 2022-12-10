import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card/Card'
import Sort from '../components/Sort/Sort'
import Categories from '../components/Сategories/Categories'

const Home = () => {
  const [pizza, setPizza] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [activeCategories, setActiveCategories] = useState(0)
  const [activeSort, setActiveSort] = useState({
    name: 'популярности',
    sortProperty: 'rating',
  })

  useEffect(() => {
    setIsLoading(true)
    axios.get(`https://6363fbbe8a3337d9a2ee38e6.mockapi.io/items?${activeCategories > 0 ? `category=${activeCategories}` : ''}&sortBy=${activeSort.sortProperty}&order=desc`,).then((arr) => {
      setPizza(arr.data)
      setIsLoading(false)
    })
  }, [activeCategories, activeSort])

  return (
    <div className='home'>
      <div className="filter">
        <Categories value={activeCategories} onChangeCategory={(index) => setActiveCategories(index)} />
        <Sort value={activeSort} onChangeSort={(obj) => setActiveSort(obj)} />
      </div>
      <div className="products">
        <h2 className="products__title">
          Все пиццы
        </h2>
        <Card pizza={pizza} isLoading={isLoading} />
      </div>
    </div>
  )
}

export default Home