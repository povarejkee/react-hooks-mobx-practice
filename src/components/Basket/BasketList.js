import React from 'react'
import BasketItem from './BasketItem'

export default function BasketList({ goods }) {
  return (
    <ul className="list-group">
      {goods.map((item, i) => (
        <BasketItem key={item.id} item={item} idx={i} />
      ))}
    </ul>
  )
}
