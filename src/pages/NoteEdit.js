import React, { useEffect, useState } from 'react'
import { useLocalStore, useObserver } from 'mobx-react-lite'
import { notesService } from '../services/notesService'
import Loader from '../components/Loader'
import { useParams } from 'react-router-dom'

export default function NoteEdit() {
  const service = useLocalStore(() => notesService)
  const [title, setTitle] = useState('')
  const { id } = useParams()

  useEffect(() => {
    service.getNote(id, ({ data }) => {
      service.note = data
      service.loading = false
      setTitle(service.note.title)
    })
  }, [])

  const onSubmit = event => {
    event.preventDefault()
    service.editNote({ ...service.note, title })
  }

  return useObserver(() =>
    service.loading ? (
      <Loader />
    ) : (
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            className="form-control"
            id="title"
            value={title}
            onChange={event => setTitle(event.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Edit
        </button>
      </form>
    )
  )
}
