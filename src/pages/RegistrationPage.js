import React from 'react'
import useForm from 'react-hook-form'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const URL = process.env.REACT_APP_API_URL
const regExpEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export default function RegistrationPage() {
  const { register, handleSubmit, errors, setError, getValues } = useForm()
  const history = useHistory()

  const onSubmit = values => {
    const user = {
      email: values.email,
      password: values.password,
    }

    if (getValues().confirmation !== user.password) {
      setError('confirmation', 'notMatch')
      return
    }

    axios.get(`${URL}/users?email=${user.email}`).then(({ data }) => {
      if (data[0]) {
        setError('email', 'notMatch')
      } else {
        axios.post(`${URL}/users`, user).then(() => {
          alert('Registry is successfully!')
          history.push('/login')
        })
      }
    })
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
            {errors.email.type === 'notMatch' && 'That email is already exist!'}
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
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm password</label>
        <input
          type="password"
          className={`form-control ${errors.confirmation && 'is-invalid'}`}
          id="confirmPassword"
          placeholder="Confirm password"
          ref={register({
            required: true,
            minLength: 6,
            maxLength: 12,
          })}
          name="confirmation"
        />
        {errors.confirmation && (
          <small className="text-danger">
            {errors.confirmation.type === 'required' &&
              'This field is required!'}
            {errors.confirmation.type === 'minLength' && 'Min length is 6!'}
            {errors.confirmation.type === 'maxLength' && 'Max length is 12!'}
            {errors.confirmation.type === 'notMatch' &&
              'Confirmation password is incorrect!'}
          </small>
        )}
      </div>
      <button type="submit" className="btn btn-primary">
        Registry
      </button>
    </form>
  )
}
