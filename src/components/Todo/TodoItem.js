import React, { useState } from 'react'
import { navigate } from 'hookrouter'

function TodoItem({ todo, onComplete, remove }) {
  const [completed, toggleComplete] = useState(todo.completed)
  const classes = []

  if (completed) {
    classes.push('done')
  }

  const onChange = ({ target: { checked } }) => {
    toggleComplete(checked)
    onComplete(todo, checked)
  }

  return (
    <li className="list-group-item">
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div
          className={classes.join(' ')}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <input type="checkbox" checked={completed} onChange={onChange} />
          &nbsp;
          {todo.title}
        </div>
        <div>
          <div className="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={() => navigate(`home/notes/${todo.id}`)}
            >
              More
            </button>
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={() => remove(todo.id)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  )
}

export default TodoItem
