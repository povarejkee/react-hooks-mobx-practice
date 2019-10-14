import axios from 'axios'

export const todoService = {
  todos: [],
  todo: null,
  loading: true,
  getTodos() {
    axios.get(`${process.env.REACT_APP_API_URL}/todos`).then(({ data }) => {
      setTimeout(() => {
        this.todos = data
        this.loading = false
      }, 500)
    })
  },

  getTodo(id) {
    axios
      .get(`${process.env.REACT_APP_API_URL}/todos/${id}`)
      .then(({ data }) => {
        setTimeout(() => {
          this.todo = data
          this.loading = false
        }, 500)
      })
  },

  toggleTodo(todo, completed) {
    const updatedTodo = { ...todo, completed }
    axios.put(`${process.env.REACT_APP_API_URL}/todos/${todo.id}`, updatedTodo)
  },

  removeTodo(id) {
    axios.delete(`${process.env.REACT_APP_API_URL}/todos/${id}`).then(() => {
      this.todos = this.todos.filter(todo => todo.id !== id)
    })
  },

  addTodo(title) {
    const obj = {
      title,
      completed: false,
    }
    axios
      .post(`${process.env.REACT_APP_API_URL}/todos/`, obj)
      .then(({ data }) => {
        this.todos = this.todos.concat([data])
      })
  },
}
