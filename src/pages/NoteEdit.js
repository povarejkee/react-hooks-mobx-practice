import React, { useEffect, useState } from 'react'
import { useLocalStore, useObserver } from 'mobx-react-lite'
import { notesService } from '../services/notesService'
import Loader from '../components/Loader'

export default function NoteEdit({ noteId }) {
  const service = useLocalStore(() => notesService)
  const [value, setValue] = useState('')

  useEffect(() => {
    service.getNote(noteId).then(({ data }) => {
      setTimeout(() => {
        service.note = data //todo подумать как избавиться от этого. Всё должно быть однотипно и меняться только в сервисе, либо наоборот
        service.loading = false
        setValue(service.note.title)
      }, 500)
    })
  }, [])

  return useObserver(() =>
    service.loading ? (
      <Loader />
    ) : (
      <form>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            className="form-control"
            id="title"
            value={value}
            onChange={event => setValue(event.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Edit
        </button>
      </form>
    )
  )
}
