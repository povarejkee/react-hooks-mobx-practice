import React from 'react'

export default function InfoPage() {
  const myAge = () => {
    const bornDate = new Date(1993, 11, 20)
    const now = new Date()

    if (
      bornDate.getMonth() >= now.getMonth() &&
      bornDate.getDate() > now.getDate()
    ) {
      return now.getFullYear() - bornDate.getFullYear() - 1
    } else {
      return now.getFullYear() - bornDate.getFullYear()
    }
  }

  return (
    <div className="jumbotron">
      <h1 className="display-4">Hello, world!</h1>
      <p className="lead">
        My name is Ilya Popov. I'm a junior web-developer, {myAge()} years old
      </p>
      <hr className="my-4" />
      <a
        className="btn btn-primary btn-lg"
        href="https://vk.com/id48094135"
        role="button"
        target="_blank"
      >
        My VK
      </a>
    </div>
  )
}
