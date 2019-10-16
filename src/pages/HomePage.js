import React, { Fragment, useEffect } from 'react'
import { useLocalStore, useObserver } from 'mobx-react-lite'
import { notesService } from '../services/notesService'
import AddTodo from '../components/Notes/AddNote'
import Loader from '../components/Loader'
import NotesList from '../components/Notes/NotesList'

export default function HomePage() {
  const service = useLocalStore(() => notesService)

  useEffect(() => {
    service.getNotes()
  }, [])

  return useObserver(() => (
    <Fragment>
      <AddTodo onCreate={service.addNote} />
      {service.loading && <Loader />}
      {service.notes.length ? (
        <NotesList
          notes={service.notes}
          onComplete={service.toggleNote}
          remove={service.removeNote}
        />
      ) : service.loading ? null : (
        <p className="text-center">No notes!</p>
      )}
    </Fragment>
  ))
}
