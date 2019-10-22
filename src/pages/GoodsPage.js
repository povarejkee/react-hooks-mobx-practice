import React, { useEffect, useContext } from 'react'
import GoodsList from '../components/Goods/GoodsList'
import Loader from '../components/Loader'
import { GoodsContext } from '../context/GoodsContext'

export default function GoodsPage() {
  const context = useContext(GoodsContext)

  useEffect(() => {
    context.getGoods()
  }, [])

  return context.loading ? <Loader /> : <GoodsList />
}
