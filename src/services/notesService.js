import axios from 'axios'
const URL = process.env.REACT_APP_API_URL

export const notesService = {
  notes: [],
  note: null,
  loading: true,
  getNotes() {
    axios.get(`${URL}/notes`).then(({ data }) => {
      setTimeout(() => {
        this.notes = data
        this.loading = false
      }, 500)
    })
  },

  getNote(id) {
    return axios.get(`${URL}/notes/${id}`)
  },

  addNote(title) {
    const obj = {
      title,
      completed: false,
    }
    axios.post(`${URL}/notes/`, obj).then(({ data }) => {
      this.notes = this.notes.concat([data])
    })
  },

  toggleNote(note, completed) {
    const updatedNote = { ...note, completed }
    axios.put(`${URL}/notes/${note.id}`, updatedNote)
  },

  removeNote(id) {
    axios.delete(`${URL}/notes/${id}`).then(() => {
      this.notes = this.notes.filter(note => note.id !== id)
    })
  },
}
