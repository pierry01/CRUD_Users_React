import React, { useState, useEffect } from 'react'
import { Container } from './styles'
import API from '../../services/API'
import UserDialog from './Form/UserDialog'
import Table from './Table'

const Home = () => {
  useEffect(() => {
    getUsers()
  }, [])

  const [users, setUsers] = useState([])

  const getUsers = () => {
    API.get('/users')
      .then((res) => { setUsers(res.data) })
      .catch((err) => { console.log(err) })
  }

  return (
    <Container>
      <br />
      <h1> CRUD Users </h1>

      <Table getUsers={getUsers} users={users} />

      <UserDialog getUsers={getUsers} />
    </Container>
  )
}

export default Home
