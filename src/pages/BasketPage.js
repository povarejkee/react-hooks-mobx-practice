import React from 'react'
import BasketList from '../components/Basket/BasketList'
import { useLocalStore } from 'mobx-react-lite'
import { goodsService } from '../services/goodsService'

export default function BasketPage() {
  const service = useLocalStore(() => goodsService)

  return <BasketList goods={service.basketGoods} />
}
