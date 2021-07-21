import React from "react";
import "./styles.css";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { Grid, Typography } from "@material-ui/core";
import {UserInterface} from "../../Interfaces"



interface Props {
  Users : UserInterface[],
  setUsers: (Users:UserInterface[]) => void,
  setUserId:(id:number | null) => void,
}
const Users:React.FC<Props> = ({ Users, setUsers, setUserId }) => {
  const handleDelete = (id : number) => {
    setUsers(Users.filter((user, index) => index !== id));
  };

  if (Users.length === 0) {
    return (
      <div>
        <h1>No user is added yet.</h1>
      </div>
    );
  }
  return (
    <Grid item>
    <div className="users">
      <Typography variant="h3" color="textPrimary">Users</Typography>
      {Users.map((user, index) => (
        <div className="user" key={index}>
          <div className="details">
            <h3>Name : {user.name}</h3>
            {user.age !== "" && <p> Age : {user.age}</p>}
            {(user.gender !== "" && user.gender !== "Prefer not to say") && <p> Gender : {user.gender}</p>}
          </div>

          <FiEdit onClick={() => setUserId(index)} className="edit" />
          <RiDeleteBinLine
            onClick={() => handleDelete(index)}
            className="delete"
          />
        </div>
      ))}
    </div>
    </Grid>
  );
};

export default Users;
