import React, { useState, useEffect } from "react";

import { Container } from "./styles";

import { useForm } from "react-hook-form";

import { Button, TextField } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import CheckIcon from "@material-ui/icons/Check";

const Form = () => {
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
      <h1>Form</h1>
    </Container>
  );
};

export default Form;
