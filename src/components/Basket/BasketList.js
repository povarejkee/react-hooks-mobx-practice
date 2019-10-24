import React, { useContext } from 'react'
import BasketItem from './BasketItem'
import { GoodsContext } from '../../context/GoodsContext'

export default function BasketList() {
  const context = useContext(GoodsContext)

  return (
    <ul className="list-group">
      {context.basketGoods.map(item => {
        return <BasketItem key={item.id} item={item} />
      })}
    </ul>
  )
}
