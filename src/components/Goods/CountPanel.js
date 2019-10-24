import React, { useContext } from 'react'
import { GoodsContext } from '../../context/GoodsContext'

export default function CountPanel({ item, counter }) {
  const context = useContext(GoodsContext)
  const eventListener = () => {
    if (counter > 1) {
      context.addToBasket(item, 'decrement')
    } else {
      context.removeFromBasket(item.id)
    }
  }

  return (
    <div className="mt-auto">
      <button className="btn btn-primary" onClick={eventListener}>
        -
      </button>
      <span className="p-1">{counter}</span>
      <button
        className="btn btn-primary"
        onClick={() => context.addToBasket(item, 'increment')}
      >
        +
      </button>
    </div>
  )
}
