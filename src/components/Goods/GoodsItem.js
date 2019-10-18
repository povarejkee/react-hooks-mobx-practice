import React from 'react'

export default function GoodsItem({ item }) {
  return (
    <div className="card" style={{ width: '25%' }}>
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">
          <strong>Author: </strong>
          {item.author}
        </p>
        <p className="card-text">
          <strong>Price: </strong>
          {item.price}$
        </p>
        <button className="btn btn-primary">Add</button>
      </div>
    </div>
  )
}
