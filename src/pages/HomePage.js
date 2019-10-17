import React, { useEffect } from 'react'
import { useLocalStore, useObserver } from 'mobx-react-lite'
import { notesService } from '../services/notesService'
import { NotesContext } from '../context/NotesContext'
import AddNote from '../components/Notes/AddNote'
import Loader from '../components/Loader'
import NotesList from '../components/Notes/NotesList'
import NotesFilters from '../components/Notes/NotesFilters'

export default function HomePage() {
  const service = useLocalStore(() => notesService)

  useEffect(() => {
    service.getNotes()
  }, [])

  return useObserver(() => (
    <NotesContext.Provider
      value={{
        addNote: service.addNote,
        removeNote: service.removeNote,
        editNote: service.editNote,
      }}
    >
      <AddNote />
      {service.loading ? <Loader /> : <NotesList notes={service.notes} />}
      <NotesFilters />
    </NotesContext.Provider>
  ))
}
