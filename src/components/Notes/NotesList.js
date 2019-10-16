import React from 'react'
import NoteItem from './NoteItem'

export default function NotesList(props) {
  return (
    <ul className="list-group">
      {props.notes.map(note => {
        return (
          <NoteItem
            note={note}
            key={note.id}
            onComplete={props.onComplete}
            remove={props.remove}
          />
        )
      })}
    </ul>
  )
}
