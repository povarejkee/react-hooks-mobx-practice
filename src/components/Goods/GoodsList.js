import React from 'react'
import GoodsItem from './GoodsItem'

export default function GoodsList({ goods }) {
  return (
    <div className="row justify-content-between">
      {goods.map(item => (
        <GoodsItem key={item.id} item={item} />
      ))}
    </div>
  )
}
