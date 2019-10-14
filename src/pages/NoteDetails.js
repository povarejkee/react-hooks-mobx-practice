import React, { Fragment, useEffect } from 'react'
import { useLocalStore, useObserver } from 'mobx-react-lite'
import { todoService } from '../services/todoService'
import Loader from '../components/Loader'

export default function NoteDetails({ noteId }) {
  const service = useLocalStore(() => todoService)

  useEffect(() => {
    service.getTodo(noteId)
  }, [])

  return useObserver(() =>
    service.loading ? (
      <Loader />
    ) : (
      <Fragment>
        <div>
          Number: <strong>{noteId}</strong>
        </div>
        <div>
          Title: <strong>{service.todo.title}</strong>
        </div>
        <div>
          Status:{' '}
          <strong>{service.todo.completed ? 'Complete' : 'Active'}</strong>
        </div>
      </Fragment>
    )
  )
}
