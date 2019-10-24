import axios from 'axios'
const URL = process.env.REACT_APP_API_URL

export const notesService = {
  notes: [],
  note: {},
  loading: false,

  getNotes() {
    this.loading = true
    axios.get(`${URL}/notes`).then(({ data }) => {
      this.notes = data
      this.loading = false
    })
  },

  getNote(id, callback) {
    //todo нужно избавиться от callback.
    this.loading = true
    axios.get(`${URL}/notes/${id}`).then(callback)
  },

  addNote(note) {
    axios
      .post(`${URL}/notes/`, note)
      .then(({ data }) => (this.notes = this.notes.concat([data])))
  },

  removeNote(id) {
    axios.delete(`${URL}/notes/${id}`).then(() => {
      this.notes = this.notes.filter(note => note.id !== id)
    })
  },

  editNote(note) {
    axios.put(`${URL}/notes/${note.id}`, note).then(() => {
      this.getNotes() //хз, нормально ли так делать?
    })
  },
}
