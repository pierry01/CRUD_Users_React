import React, { useState, useEffect } from "react";

import { Container } from "./styles";

import { useForm } from "react-hook-form";

import { Button, TextField } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import CheckIcon from "@material-ui/icons/Check";

const Form = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const [user, setUser] = useState(props.currentUser);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const onSubmit = (updatedUser) => {
    props.updateUser(user.id, updatedUser);
    window.location.reload();
  };

  const validarCpf = require("validar-cpf");

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
          inputRef={register({
            minLength: { value: 10, message: "Min 10 characters" },
          })}
          defaultValue={user.name}
        />
        {errors.name && <p>{errors.name.message}</p>}

        <br />
        <TextField
          variant="outlined"
          id="cpf"
          label="CPF"
          name="cpf"
          required
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
          defaultValue={user.cpf}
        />
        {errors.cpf && <p>{errors.cpf.message}</p>}

        <br />
        <Button
          variant="contained"
          style={{ backgroundColor: "#4caf50", color: "#fff" }}
          type="submit"
          size="small"
          startIcon={<CheckIcon />}
        >
          Update User
        </Button>

        <Button
          variant="contained"
          style={{ backgroundColor: "#9a0036", color: "#fff" }}
          size="small"
          startIcon={<ClearIcon />}
          onClick={() => props.setEditing(false)}
        >
          Cancel
        </Button>
      </form>
    </Container>
  );
};

export default Form;
