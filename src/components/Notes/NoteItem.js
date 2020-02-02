import React, { useState, useContext } from 'react'
import { NotesContext } from '../../context/NotesContext'
import { useHistory } from 'react-router-dom'

export default function NoteItem({ note }) {
  const context = useContext(NotesContext)
  const [completed, toggleComplete] = useState(note.completed)
  const history = useHistory()

  const classes = ['d-flex', 'justify-content-between', 'align-items-center']

  if (completed) {
    classes.push('done')
  }

  const onChange = ({ target: { checked } }) => {
    toggleComplete(checked)
    context.editNote({ ...note, completed: checked })
  }

  return (
    <li className="list-group-item">
      <div className="d-flex justify-content-between align-items-center">
        <div className={classes.join(' ')}>
          <input type="checkbox" checked={completed} onChange={onChange} />
          &nbsp;
          {note.title}
        </div>
        <div>
          <div className="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={() => history.push(`/notes/${note.id}`)}
            >
              More
            </button>
            <button
              type="button"
              className="btn btn-outline-success"
              onClick={() => history.push(`/notes/edit/${note.id}`)}
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
