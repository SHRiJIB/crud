import React from "react";
import { Button, Grid, Typography, Paper } from "@material-ui/core";
import { UserInterface } from "../../Interfaces";
import useStyles from "./styles";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
interface Props {
  Users: UserInterface[];
  setUsers: (Users: UserInterface[]) => void;
  setUserId: (id: number | null) => void;
}
const Users: React.FC<Props> = ({ Users, setUsers, setUserId }) => {
  const classes = useStyles();
  const handleDelete = (id: number) => {
    setUsers(Users.filter((user, index) => index !== id));
  };

  if (Users.length === 0) {
    return (
      <div>
        <Typography variant="h4">No user is added yet.</Typography>
      </div>
    );
  }
  return (
    <Grid item>
      <Typography variant="h3" className={classes.title}>
        Users
      </Typography>
      {Users.map((user, index) => (
        <Paper key={index} className={classes.paper}>
          <div className={classes.details}>
            <Typography variant="h5">{user.name}</Typography>
            {user.age !== "" && (
              <Typography variant="body2"> Age : {user.age}</Typography>
            )}
            {user.gender !== "" && user.gender !== "Prefer not to say" && (
              <Typography variant="body2"> Gender : {user.gender}</Typography>
            )}
          </div>
          <div className={classes.icons}>
            <Button onClick={() => setUserId(index)}>
              <EditIcon />
            </Button>
            <Button onClick={() => handleDelete(index)}>
              <DeleteIcon />
            </Button>
          </div>
        </Paper>
      ))}
    </Grid>
  );
};

export default Users;
