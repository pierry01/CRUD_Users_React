import React, { useState } from "react";
import { ModalContainer } from "./styles";
import { Container, Button } from "@material-ui/core";
import API from "../../API";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import AddUserForm from "../Form/AddUserForm";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

const MyModal = (props) => {
  const [open, setOpen] = React.useState(false);

  const addUser = (user) => {
    let params = { name: user.name, cpf: user.cpf };

    API.post("/users", params)
      .then((res) => {
        handleClose();
        props.getUsers();
      })
      .catch((err) => {
        console.log("catch: " + err);
      });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Container>
      <br />
      <Button
        variant="contained"
        size="small"
        id="buttonNewUser"
        style={{ backgroundColor: "#4caf50", color: "#fff" }}
        startIcon={<AddCircleOutlineIcon />}
        onClick={handleOpen}
      >
        Add User
      </Button>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <ModalContainer>
            <AddUserForm addUser={addUser} />
          </ModalContainer>
        </Fade>
      </Modal>
    </Container>
  );
};

export default MyModal;
