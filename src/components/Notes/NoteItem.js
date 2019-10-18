import React, { useState, useContext } from 'react'
import { navigate } from 'hookrouter'
import { NotesContext } from '../../context/NotesContext'

export default function NoteItem({ note }) {
  const context = useContext(NotesContext)
  const [completed, toggleComplete] = useState(note.completed)
  const classes = []

  if (completed) {
    classes.push('done')
  }

  const onChange = ({ target: { checked } }) => {
    toggleComplete(checked)
    context.editNote({ ...note, completed: checked })
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
              onClick={() => navigate(`/notes/${note.id}`)}
            >
              More
            </button>
            <button
              type="button"
              className="btn btn-outline-success"
              onClick={() => navigate(`/notes/edit/${note.id}`)}
            >
              Edit
            </button>
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={() => context.removeNote(note.id)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  )
}
