import React, { useState } from "react";
import Users from "../../components/Users/Users";
import Form from "../../components/Form/UserDetailsForm";
import { Container, Grid } from "@material-ui/core";
import useStyles from "./styles";
import { useStoreState } from "../../TypedHooks";

const UserDetails = () => {
  const classes = useStyles();
  const users = useStoreState((state) => state.users.users);
  const [userId, setUserId] = useState<number | null>(null);
  return (
    <Container className={classes.mainContainer}>
      <Grid item md={6}>
        <Users Users={users} setUserId={setUserId} />
      </Grid>
      <Grid item md={6}>
        <Form Users={users} userId={userId} setUserId={setUserId} />
      </Grid>
    </Container>
  );
};

export default UserDetails;
