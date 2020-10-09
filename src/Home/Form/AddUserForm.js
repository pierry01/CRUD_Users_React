import React, { useState } from "react";

import { Container } from "./styles";

import { useForm } from "react-hook-form";

import { Button, TextField } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

const AddUserForm = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const initialFormState = { id: null, name: "", cpf: "" };
  const [user, setUser] = useState(initialFormState);

  const validarCpf = require("validar-cpf");

  const onSubmit = (e) => {
    props.addUser(e);
    setUser(initialFormState);
  };

  return (
    <Container>
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          variant="outlined"
          id="name"
          label="Name"
          name="name"
          autoFocus
          required
          defaultValue={user.name}
          inputRef={register({
            minLength: { value: 10, message: "Min 10 characters" },
          })}
        />
        {errors.name && <p>{errors.name.message}</p>}

        <br />
        <TextField
          variant="outlined"
          id="cpf"
          label="CPF"
          name="cpf"
          required
          defaultValue={user.cpf}
          inputRef={register({
            validate: (value) => {
              if (value.length !== 11) {
                return "Exactly 11 characters";
              } else {
                if (!validarCpf(value)) {
                  return "CPF inválido";
                }
              }
            },
          })}
        />
        {errors.cpf && <p>{errors.cpf.message}</p>}

        <br />
        <Button
          variant="contained"
          type="submit"
          size="small"
          id="buttonNewUser"
          style={{ backgroundColor: "#4caf50", color: "#fff" }}
          startIcon={<AddCircleOutlineIcon />}
        >
          Add User
        </Button>
      </form>
    </Container>
  );
};

export default AddUserForm;
