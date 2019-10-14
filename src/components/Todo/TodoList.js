import React from 'react'
import TodoItem from './TodoItem'

function TodoList(props) {
  return (
    <ul className="list-group">
      {props.todos.map(todo => {
        return (
          <TodoItem
            todo={todo}
            key={todo.id}
            onComplete={props.onComplete}
            remove={props.remove}
          />
        )
      })}
    </ul>
  )
}

export default TodoList
