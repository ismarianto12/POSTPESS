import Head from 'next/head'
import Image from 'next/image'
import Form from '../components/form'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import Router from 'next/router'

export default function Home() {
  const [value, setValue] = useState({
    username: '',
    password: ''
  })
  const [info, setInfo] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (value.username != '' && value.password != '') {
      if (value.username == 'admin' && value.password == '123') {
        setInfo(<div className='alert alert-info'>{'username dan password benar'}</div>)
        localStorage.setItem('username', value.username);

        // setCookies('test', 'value', { req, res, maxAge: 60 * 6 * 24 });
        Router.push('admin/dashboard')
      } else {
        setInfo(<div className='alert alert-warning'>{'username dan password salah'}</div>)
      }
    } else {
      setError(true)
      setInfo('')
    }
  }

  const handleChange = (e) => {
    setError(true)
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    })
  }

  const reset = () => {
    setInfo('')
    setError(false)

    setValue({
      username: '',
      password: ''
    })
  }

  return (
    <>
      <Head>
        <title>Login Aplikasi</title>
      </Head>
      <Form value={value} handleChange={handleChange} handleSubmit={handleSubmit} info={info} reset={reset} error={error}></Form>
    </>
  )
}
