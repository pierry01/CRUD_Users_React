import React, { useState, useEffect } from "react";

import { Container } from "./styles";

import API from "../API";

import UserDialog from "./Form/UserDialog";
import UserTable from "./UserTable";

const Home = () => {
  useEffect(() => {
    getUsers();
  }, []);

  // Set States
  let usersData = [];
  const initialFormState = { id: null, name: "", cpf: "" };
  const [users, setUsers] = useState(usersData);

  // CRUD
  const getUsers = () => {
    API.get("/users")
      .then((res) => {
        if (res.data != null) {
          usersData = res.data;
        }
        setUsers(usersData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateUser = (id, updatedUser) => {
    let params = { name: updatedUser.name, cpf: updatedUser.cpf };

    API.patch(`/users/${id}`, params)
      .then((res) => {
        console.log(res);
        setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteUser = (id) => {
    API.delete(`/users/${id}`)
      .then((res) => {
        setUsers(users.filter((user) => user.id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <br />
      <h1> BLOX - Test Code </h1>

      <UserTable users={users} deleteUser={deleteUser} />

      <UserDialog getUsers={getUsers} />
    </Container>
  );
};

export default Home;
