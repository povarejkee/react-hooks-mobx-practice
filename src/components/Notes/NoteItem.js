import React, { useState } from 'react'
import { navigate } from 'hookrouter'

export default function NoteItem({ note, onComplete, remove }) {
  const [completed, toggleComplete] = useState(note.completed)
  const classes = []

  if (completed) {
    classes.push('done')
  }

  const onChange = ({ target: { checked } }) => {
    toggleComplete(checked)
    onComplete(note, checked)
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
          {note.title}
        </div>
        <div>
          <div className="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={() => navigate(`home/notes/${note.id}`)}
            >
              More
            </button>
            <button
              type="button"
              className="btn btn-outline-success"
              onClick={() => navigate(`home/edit/${note.id}`)}
            >
              Edit
            </button>
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={() => remove(note.id)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  )
}
