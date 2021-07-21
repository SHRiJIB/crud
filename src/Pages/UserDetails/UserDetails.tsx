import React, { useState } from "react";
import Users from "../../components/Users/Users";
import Form from "../../components/Form/UserDetailsForm";
import { Container, Grid } from "@material-ui/core";
import useStyles from "./styles";
import { UserInterface } from "../../Interfaces";

const UserDetails = () => {
  const classes = useStyles();
  const [users, setUsers] = useState<UserInterface[]>([]);
  const [userId, setUserId] = useState<number | null>(null);
  return (
    <Container className={classes.mainContainer}>
      <Grid item md={6}>
        <Users Users={users} setUsers={setUsers} setUserId={setUserId} />
      </Grid>
      <Grid item md={6}>
        <Form
          Users={users}
          setUsers={setUsers}
          userId={userId}
          setUserId={setUserId}
        />
      </Grid>
    </Container>
  );
};

export default UserDetails;
