import React from 'react'
import useForm from 'react-hook-form'
import { A } from 'hookrouter'
const regExpEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export default function LoginPage() {
  const { register, handleSubmit, errors, reset } = useForm()
  const onSubmit = values => {
    console.log(values)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="text"
          className={`form-control ${errors.email && 'is-invalid'}`}
          id="email"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          ref={register({
            required: true,
            pattern: regExpEmail,
          })}
          name="email"
        />
        {errors.email && (
          <small className="text-danger">
            {errors.email.type === 'required' && 'This field is required!'}
            {errors.email.type === 'pattern' && 'Uncorrect email!'}
          </small>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className={`form-control ${errors.password && 'is-invalid'}`}
          id="password"
          placeholder="Password"
          ref={register({
            required: true,
            minLength: 6,
            maxLength: 12,
          })}
          name="password"
        />
        {errors.password && (
          <small className="text-danger">
            {errors.password.type === 'required' && 'This field is required!'}
            {errors.password.type === 'minLength' && 'Min length is 6!'}
            {errors.password.type === 'maxLength' && 'Max length is 12!'}
          </small>
        )}
      </div>
      <button type="submit" className="btn btn-primary">
        Login
      </button>
      <A href="/registration">
        <button className="btn btn-primary ml-2">Registration</button>
      </A>
    </form>
  )
}
