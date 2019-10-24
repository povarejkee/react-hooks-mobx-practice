import React, { useContext } from 'react'
import { GoodsContext } from '../../context/GoodsContext'
import CountPanel from '../Goods/CountPanel'

export default function BasketItem({ item }) {
  const context = useContext(GoodsContext)

  return (
    <li className="list-group-item">
      <div className="d-flex align-items-center">
        <div>{`${item.id}. ${item.title} (${item.price * item.count}$)`}</div>
        <div className="d-flex align-items-center ml-auto">
          <CountPanel item={item} counter={item.count} />
          <button
            type="button"
            className="btn btn-outline-danger ml-2"
            onClick={() => context.removeFromBasket(item.id)}
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  )
}
