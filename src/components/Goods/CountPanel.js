import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'

export default function CountPanel({ item, counter }) {
  const context = useContext(GlobalContext)
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
