import React, { useContext } from 'react'
import CountPanel from '../Goods/CountPanel'
import { GlobalContext } from '../../context/GlobalContext'

export default function BasketItem({ item, index }) {
  const context = useContext(GlobalContext)

  return (
    <li className="list-group-item">
      <div className="d-flex align-items-center">
        <div>{`${index + 1}. ${item.title} (${item.price * item.count}$)`}</div>
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
