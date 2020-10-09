import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Container } from "./styles";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  body: { fontSize: 14 },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": { backgroundColor: theme.palette.action.hover },
  },
}))(TableRow);

const UserTable = (props) => {
  return (
    <Container>
      <Table size="small">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>CPF</StyledTableCell>
            <StyledTableCell>Actions</StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {props.users.length > 0 ? (
            props.users.map((user) => (
              <StyledTableRow key={user.id}>
                <StyledTableCell component="th" scope="row">
                  {user.name}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {user.cpf}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  <Button
                    onClick={() => {
                      props.editRow(user);
                    }}
                    variant="contained"
                    color="primary"
                    size="small"
                    startIcon={<EditIcon />}
                  >
                    Edit User
                  </Button>

                  <Button
                    variant="contained"
                    style={{ backgroundColor: "#9a0036", color: "#fff" }}
                    size="small"
                    startIcon={<DeleteIcon />}
                    onClick={() => {
                      if (window.confirm("Delete the item?")) {
                        props.deleteUser(user.id);
                      }
                    }}
                  >
                    Delete User
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))
          ) : (
            <TableRow>
              <StyledTableCell component="th" scope="row" colSpan={3}>
                No users
              </StyledTableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Container>
  );
};

export default UserTable;
