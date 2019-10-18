import React from 'react'
import NotesPage from './pages/NotesPage'
import InfoPage from './pages/InfoPage'
import NoteDetails from './pages/NoteDetails'
import NoteEdit from './pages/NoteEdit'
import GoodsPage from './pages/GoodsPage'

export const routes = {
  '/': () => <NotesPage />,
  '/notes/:id': ({ id }) => <NoteDetails noteId={id} />,
  '/notes/edit/:id': ({ id }) => <NoteEdit noteId={id} />,
  '/info': () => <InfoPage />,
  '/goods': () => <GoodsPage />,
}
