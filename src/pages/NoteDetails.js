import React, { useEffect } from 'react'
import { useLocalStore, useObserver } from 'mobx-react-lite'
import { notesService } from '../services/notesService'
import Loader from '../components/Loader'

export default function NoteDetails({ noteId }) {
  const service = useLocalStore(() => notesService)

  useEffect(() => {
    service.getNote(noteId, ({ data }) => {
      service.note = { ...data }
      service.loading = false
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
            <strong>Title: </strong>
            {service.note.title}
          </li>
          <li className="list-group-item">
            <strong>Status: </strong>
            {service.note.completed ? 'Complete' : 'Active'}
          </li>
        </ul>
      </div>
    )
  )
}
