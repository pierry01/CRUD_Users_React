import React from 'react'
import API from '../../../services/API'
import { Container } from './styles'
import { useForm } from 'react-hook-form'
import { Button, TextField } from '@material-ui/core'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import CheckIcon from '@material-ui/icons/Check'

const UserForm = ({ user, handleClose, getUsers }) => {
  const { register, handleSubmit, errors } = useForm()

  const validarCpf = require('validar-cpf')

  const isEditing = !!user

  const onSubmit = (e) => {
    if (!isEditing) {
      let params = { name: e.name, cpf: e.cpf }

      API.post('/users', params)
        .then((res) => {
          document.getElementById('form').reset()
          handleClose()
          getUsers()
        })
        .catch((err) => { console.log(err) })
    } else {
      let params = { name: e.name, cpf: e.cpf }

      API.patch(`/users/${user.id}`, params)
        .then((res) => {
          document.getElementById('form').reset()
          handleClose()
          getUsers()
        })
        .catch((err) => { console.log(err) })
    }
  }

  return (
    <Container>
      <form id='form' autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
        <TextField
          variant='outlined'
          id='name'
          label='Name'
          name='name'
          autoFocus
          required
          defaultValue={isEditing ? user.name : ''}
          inputRef={register({
            minLength: { value: 10, message: 'Min 10 characters' },
          })}
        />
        {errors.name && <p>{errors.name.message}</p>}

        <br />
        <TextField
          variant='outlined'
          id='cpf'
          label='CPF'
          name='cpf'
          required
          defaultValue={isEditing ? user.cpf : ''}
          inputRef={register({
            validate: (value) => {
              if (value.length !== 11) {
                return 'Exactly 11 characters'
              } else {
                if (!validarCpf(value)) {
                  return 'CPF inválido'
                }
              }
            },
          })}
        />
        {errors.cpf && <p>{errors.cpf.message}</p>}

        <br />
        <Button
          variant='contained'
          type='submit'
          size='small'
          id='buttonNewUser'
          startIcon={isEditing ? <CheckIcon /> : <AddCircleOutlineIcon />}
          style={
            isEditing ? 
              {backgroundColor: '#006974', color: '#FFF'} 
              : {backgroundColor: '#4caf50', color: '#fff'}
          }
        >
          {isEditing ? 'Edit' : 'Add User'}
        </Button>
      </form>
    </Container>
  )
}

export default UserForm
