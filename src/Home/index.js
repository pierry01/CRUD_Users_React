import React, { useState, useEffect } from "react";

import { Container } from "./styles";

import API from "../API";

import EditUserForm from "./Form/EditUserForm";
import UserTable from "./UserTable";
import MyModal from "./UserTable/MyModal";

const Home = () => {
  // eslint-disable-next-line
  useEffect(() => {
    getUsers();
  }, []);

  // Set States
  let usersData = [];
  const initialFormState = { id: null, name: "", cpf: "" };
  const [users, setUsers] = useState(usersData);
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

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
        setEditing(false);
        setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteUser = (id) => {
    API.delete(`/users/${id}`)
      .then((res) => {
        setEditing(false);
        setUsers(users.filter((user) => user.id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // AUX
  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, cpf: user.cpf });
  };

  return (
    <Container>
      <h1> BLOX - Test Code </h1>

      <div>
        {editing ? (
          <>
            <EditUserForm
              editing={editing}
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
            />
          </>
        ) : (
          <>
            <MyModal getUsers={getUsers} />
          </>
        )}
      </div>

      <div>
        <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
      </div>
    </Container>
  );
};

export default Home;
