import React, { useEffect } from 'react'
import { useLocalStore, useObserver } from 'mobx-react-lite'
import { notesService } from '../services/notesService'
import Loader from '../components/Loader'

export default function NoteDetails({ noteId }) {
  const service = useLocalStore(() => notesService)

  useEffect(() => {
    service.getNote(noteId).then(({ data }) => {
      setTimeout(() => {
        service.note = data
        service.loading = false
      }, 500)
    })
  }, [])

  return useObserver(() =>
    service.loading ? (
      <Loader />
    ) : (
      <div className="card">
        <div className="card-header">Information:</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            Title: <strong>{service.note.title}</strong>
          </li>
          <li className="list-group-item">
            Status:{' '}
            <strong>{service.note.completed ? 'Complete' : 'Active'}</strong>
          </li>
        </ul>
      </div>
    )
  )
}
