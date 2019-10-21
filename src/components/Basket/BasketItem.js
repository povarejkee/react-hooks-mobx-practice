import React from 'react'

export default function BasketItem({ item, idx }) {
  return (
    <li className="list-group-item">
      {idx + 1}. {item.title}
    </li>
  )
}
