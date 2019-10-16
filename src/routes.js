import React from 'react'
import HomePage from './pages/HomePage'
import InfoPage from './pages/InfoPage'
import NoteDetails from './pages/NoteDetails'
import NoteEdit from './pages/NoteEdit'

export const routes = {
  '/home': () => <HomePage />,
  '/home/notes/:id': ({ id }) => <NoteDetails noteId={id} />,
  '/home/edit/:id': ({ id }) => <NoteEdit noteId={id} />,
  '/info': () => <InfoPage />,
}
