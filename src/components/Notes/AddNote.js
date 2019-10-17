import React, { useState, useContext } from 'react'
import { NotesContext } from '../../context/NotesContext'

export default function AddNote() {
  const context = useContext(NotesContext)
  const [title, setTitle] = useState('')

  function submitHandler(event) {
    event.preventDefault()

    if (title.trim()) {
      const newNote = { title, completed: false }

      context.addNote(newNote)

      setTitle('')
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <input
          value={title}
          onChange={event => setTitle(event.target.value)}
          className="form-control"
          placeholder="Add note..."
        />
      </div>
    </form>
  )
}
