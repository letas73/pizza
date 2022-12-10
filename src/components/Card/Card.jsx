import React from 'react'
import CardItem from '../CardItem/CardItem'
import Skeleton from './Skeleton'

import './Card.scss'

const Card = ({ pizza, isLoading }) => {
  return (
    <ul className="products__card card">
      {
        isLoading ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
        : pizza.map((obj) => <CardItem key={obj.id} {...obj} />)
      }
    </ul>
  )
}

export default Card