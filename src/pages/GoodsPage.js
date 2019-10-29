import React, { useEffect, useContext } from 'react'
import GoodsList from '../components/Goods/GoodsList'
import Loader from '../components/Loader'
import { GlobalContext } from '../context/GlobalContext'

export default function GoodsPage() {
  const context = useContext(GlobalContext)

  useEffect(() => {
    context.getGoods()
  }, [])

  return context.loading ? <Loader /> : <GoodsList />
}
