import React from 'react'
import HomePage from './pages/HomePage'
import InfoPage from './pages/InfoPage'
import NoteDetails from './pages/NoteDetails'

export const routes = {
  '/home': () => <HomePage />,
  '/home/notes/:id': ({ id }) => <NoteDetails noteId={id} />,
  '/info': () => <InfoPage />,
}
