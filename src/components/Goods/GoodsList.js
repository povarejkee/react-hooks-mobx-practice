import React from 'react'
import GoodsItem from './GoodsItem'

export default function GoodsList({ goods }) {
  return goods.map(item => <GoodsItem key={item.id} item={item} />)
}
