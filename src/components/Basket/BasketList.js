import React, { useContext } from 'react'
import BasketItem from './BasketItem'
import { GlobalContext } from '../../context/GlobalContext'

export default function BasketList() {
  const context = useContext(GlobalContext)

  return (
    <ul className="list-group">
      {context.basketGoods.map(item => {
        return <BasketItem key={item.id} item={item} />
      })}
    </ul>
  )
}
