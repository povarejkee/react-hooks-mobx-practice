import React, { Fragment, useContext } from 'react'
import BasketList from '../components/Basket/BasketList'
import { GoodsContext } from '../context/GoodsContext'

export default function BasketPage() {
  const context = useContext(GoodsContext)

  return (
    <Fragment>
      <h3 className="text-center">Total: {context.totalSum}$</h3>
      <BasketList />
    </Fragment>
  )
}
