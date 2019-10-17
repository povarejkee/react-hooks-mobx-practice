import React from 'react'
import NoteItem from './NoteItem'

export default function NotesList({ notes }) {
  return (
    <ul className="list-group">
      {notes.map(note => {
        return <NoteItem note={note} key={note.id} />
      })}
    </ul>
  )
}
