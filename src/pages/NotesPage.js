import React, { useEffect, useState } from 'react'
import { useLocalStore, useObserver } from 'mobx-react-lite'
import { notesService } from '../services/notesService'
import { NotesContext } from '../context/NotesContext'
import AddNote from '../components/Notes/AddNote'
import Loader from '../components/Loader'
import NotesList from '../components/Notes/NotesList'
import NotesFilters from '../components/Notes/NotesFilters'
import Alert from '../components/Alert'

export default function NotesPage() {
  const service = useLocalStore(() => notesService)
  const [filter, changeFilter] = useState('')

  const onFilter = filter => {
    switch (filter) {
      case 'active':
        changeFilter(filter)
        break
      case 'completed':
        changeFilter(filter)
        break
      default:
        changeFilter('all')
    }
  }

  const filteredNotes = () => {
    switch (filter) {
      case 'active':
        return service.notes.filter(note => !note.completed)
      case 'completed':
        return service.notes.filter(note => note.completed)
      default:
        return service.notes
    }
  }

  useEffect(() => {
    service.getNotes()
  }, [])

  return useObserver(() => (
    <NotesContext.Provider
      value={{
        addNote: service.addNote,
        removeNote: service.removeNote,
        editNote: service.editNote,
        onFilter,
      }}
    >
      <AddNote />
      {service.loading ? (
        <Loader />
      ) : filteredNotes().length ? (
        <NotesList notes={filteredNotes()} />
      ) : (
        <Alert title="No notes!" text="Add something..." type="warning" />
      )}
      <NotesFilters />
    </NotesContext.Provider>
  ))
}
