import React, { useState } from 'react'

export default function AddNote({ onCreate }) {
  const [value, setValue] = useState('')

  function submitHandler(event) {
    event.preventDefault()

    if (value.trim()) {
      onCreate(value)
      setValue('')
    }
  }

  return (
    <form style={{ marginBottom: '1rem' }} onSubmit={submitHandler}>
      <div className="form-group">
        <input
          value={value}
          onChange={event => setValue(event.target.value)}
          className="form-control"
          placeholder="Add note..."
        />
      </div>
    </form>
  )
}
