import React from 'react'

export default function InfoPage() {
  return (
    <div className="jumbotron">
      <h1 className="display-4">Hello, world!</h1>
      <p className="lead">
        My name is Ilya Popov, and I'm a junior web-developer, 25 years old
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
