import React, { useContext } from 'react'
import GoodsItem from './GoodsItem'
import { GlobalContext } from '../../context/GlobalContext'

export default function GoodsList() {
  const context = useContext(GlobalContext)

  return (
    <div className="row justify-content-between">
      {context.goods.map(item => (
        <GoodsItem key={item.id} item={item} />
      ))}
    </div>
  )
}
