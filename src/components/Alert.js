import React from 'react'

export default function Alert({ title, text, type }) {
  return (
    <div className={`alert alert-${type}`} role="alert">
      <h4 className="alert-heading">{title}</h4>
      <p>{text}</p>
    </div>
  )
}
