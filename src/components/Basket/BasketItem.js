import React, { useContext } from 'react'
import { GoodsContext } from '../../context/GoodsContext'

export default function BasketItem({ item, index }) {
  const context = useContext(GoodsContext)

  return (
    <li className="list-group-item">
      <div className="d-flex align-items-center">
        {`${index + 1}. ${item.title} (${item.price}$)`}
        <button
          type="button"
          className="btn btn-outline-danger ml-auto"
          onClick={() => context.removeFromBasket(index)}
        >
          Remove
        </button>
      </div>
    </li>
  )
}
