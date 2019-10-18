import React, { useContext } from 'react'
import { useObserver } from 'mobx-react-lite'
import { NotesContext } from '../../context/NotesContext'

export default function NotesFilters() {
  const context = useContext(NotesContext)

  return useObserver(() => (
    <div className="btn-group pt-3" role="group" aria-label="Basic example">
      <button
        type="button"
        className="btn btn-light"
        onClick={() => context.onFilter('active')}
      >
        active
      </button>
      <button
        type="button"
        className="btn btn-light"
        onClick={() => context.onFilter('completed')}
      >
        completed
      </button>
      <button
        type="button"
        className="btn btn-light"
        onClick={() => context.onFilter('all')}
      >
        all
      </button>
    </div>
  ))
}
