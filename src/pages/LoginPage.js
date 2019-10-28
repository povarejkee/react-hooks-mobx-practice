import React, { useContext } from 'react'
import useForm from 'react-hook-form'
import { navigate } from 'hookrouter'
import axios from 'axios'
import { AuthContext } from '../context/AuthContext'
const URL = process.env.REACT_APP_API_URL
const regExpEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export default function LoginPage() {
  const { register, handleSubmit, errors, setError } = useForm()
  const authContext = useContext(AuthContext)

  const onSubmit = values => {
    axios.get(`${URL}/users?email=${values.email}`).then(({ data }) => {
      if (data[0] && values.email === data[0].email) {
        if (values.password === data[0].password) {
          alert('Success!')
          authContext.logIn(values.email)
          navigate(`${URL}`)
        } else {
          setError('password', 'notMatch')
        }
      } else {
        setError('email', 'notMatch')
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
            {errors.email.type === 'notMatch' && 'That email is not register!'}
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
            {errors.password.type === 'notMatch' && 'Incorrect password!'}
          </small>
        )}
      </div>
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  )
}
