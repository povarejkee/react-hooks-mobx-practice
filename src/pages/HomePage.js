import React, { Fragment, useEffect } from 'react'
import { useLocalStore, useObserver } from 'mobx-react-lite'
import { todoService } from '../services/todoService'
import AddTodo from '../components/Todo/AddTodo'
import Loader from '../components/Loader'
import TodoList from '../components/Todo/TodoList'

export default function HomePage() {
  const service = useLocalStore(() => todoService)

  useEffect(() => {
    service.getTodos()
  }, [])

  return useObserver(() => (
    <Fragment>
      <AddTodo onCreate={service.addTodo} />
      {service.loading && <Loader />}
      {service.todos.length ? (
        <TodoList
          todos={service.todos}
          onComplete={service.toggleTodo}
          remove={service.removeTodo}
        />
      ) : service.loading ? null : (
        <p className="text-center">No todos!</p>
      )}
    </Fragment>
  ))
}
