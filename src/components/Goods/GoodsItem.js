import React, { useContext } from 'react'
import { GoodsContext } from '../../context/GoodsContext'
import CountPanel from './CountPanel'

export default function GoodsItem({ item }) {
  const context = useContext(GoodsContext)
  const basketGood = context.basketGoods.find(({ id }) => id === item.id)
  const renderActions = () =>
    basketGood && basketGood.count > 0 ? (
      <CountPanel item={item} counter={basketGood.count} />
    ) : (
      <button
        className="btn btn-primary mt-auto"
        onClick={() => context.addToBasket(item)}
      >
        Add to basket
      </button>
    )

  return (
    <div className="card col-3">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">
          <strong>Author: </strong>
          {item.author}
        </p>
        <p className="card-text">
          <strong>Price: </strong>
          {item.price}$
        </p>
        {renderActions()}
      </div>
    </div>
  )
}
