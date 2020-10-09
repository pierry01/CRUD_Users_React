import React, { useState } from "react";

import { Container } from "./styles";

import { useForm } from "react-hook-form";

import { Button, TextField } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

const AddUserForm = () => {
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
      <h1>Form</h1>
    </Container>
  );
};

export default AddUserForm;
