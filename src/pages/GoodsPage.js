import React, { useEffect } from 'react'
import GoodsList from '../components/Goods/GoodsList'
import { useLocalStore, useObserver } from 'mobx-react-lite'
import { goodsService } from '../services/goodsService'
import Loader from '../components/Loader'

export default function GoodsPage() {
  const service = useLocalStore(() => goodsService)

  useEffect(() => {
    service.getGoods()
  }, [])

  return useObserver(() =>
    service.loading ? <Loader /> : <GoodsList goods={service.goods} />
  )
}
