import React, { useContext } from 'react'
import { GoodsContext } from '../../context/GoodsContext'

export default function BasketItem({ item, index }) {
  const context = useContext(GoodsContext)

  return (
    <li className="list-group-item">
      <div className="d-flex align-items-center">
        {`${index + 1}. ${item.title} (${item.price * item.count}$)`}
        <div className="d-flex align-items-center ml-auto">
          <div>
            <button
              onClick={() => context.addToBasket(item, 'decrement')}
              disabled={item.count === 1}
            >
              -
            </button>
            {item.count}
            <button onClick={() => context.addToBasket(item)}>+</button>
          </div>
          <button
            type="button"
            className="btn btn-outline-danger ml-2"
            onClick={() => context.removeFromBasket(index)}
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  )
}
