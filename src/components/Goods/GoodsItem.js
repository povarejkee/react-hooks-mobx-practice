import React, { useContext } from 'react'
import { GoodsContext } from '../../context/GoodsContext'

export default function GoodsItem({ item }) {
  const context = useContext(GoodsContext)

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
        <button
          className="btn btn-primary mt-auto"
          onClick={() => context.addToBasket(item)}
        >
          Add to basket
        </button>
      </div>
    </div>
  )
}
