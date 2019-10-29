import React from 'react'
import NotesPage from './pages/NotesPage'
import InfoPage from './pages/InfoPage'
import NoteDetails from './pages/NoteDetails'
import NoteEdit from './pages/NoteEdit'
import GoodsPage from './pages/GoodsPage'
import BasketPage from './pages/BasketPage'
import LoginPage from './pages/LoginPage'
import RegistrationPage from './pages/RegistrationPage'

export const isAuthRoutes = {
  '/': () => <NotesPage />,
  '/notes/:id': ({ id }) => <NoteDetails noteId={id} />,
  '/notes/edit/:id': ({ id }) => <NoteEdit noteId={id} />,
  '/info': () => <InfoPage />,
  '/goods': () => <GoodsPage />,
  '/goods/basket': () => <BasketPage />,
}

export const notAuthRoutes = {
  '/login': () => <LoginPage />,
  '/registration': () => <RegistrationPage />,
}
