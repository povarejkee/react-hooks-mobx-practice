import React, { useContext } from 'react'
import GoodsItem from './GoodsItem'
import { GoodsContext } from '../../context/GoodsContext'

export default function GoodsList() {
  const context = useContext(GoodsContext)

  return (
    <div className="row justify-content-between">
      {context.goods.map(item => (
        <GoodsItem key={item.id} item={item} />
      ))}
    </div>
  )
}
