import { Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import {UserInterface} from "../../Interfaces"

import useStyles from "./styles";


interface Props {
  Users : UserInterface[],
  setUsers: (Users:UserInterface[]) => void,
  userId:number | null,
  setUserId:(id:number | null) => void,
}
const UserDetailsForm : React.FC<Props> = ({ Users, setUsers, userId, setUserId }) => {

  const classes = useStyles();
  const [user, setUser] = useState<UserInterface>({
    name: "",
    age: "",
    gender: "",
  });

  const currentUser = userId !== null ? Users[userId] : null;

  const handleChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleGenderChange = (event : React.ChangeEvent<{name?: string | number | symbol | any,value:unknown}>) => {
    setUser({ ...user, [event.target.name]: event.target.value });
    console.log(user);
  }
  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (user.name.length === 0 || user.age === "0") return;
    if (currentUser) {
      setUsers(
        Users.map((oldUser, index) => (index === userId ? user : oldUser))
      );
    } else {
      setUsers([...Users, user]);
    }
    clear();
  };

  const clear = () => {
    setUserId(null);
    setUser({
      name: "",
      age: "",
      gender: "",
    });
  };

  

  useEffect(() => {
    if (currentUser) setUser(currentUser);
  }, [currentUser]);
  return (
    <Grid item>
      <Typography variant="h3" >Fill up the details</Typography>
      <Paper className={classes.paper}>

      
      <form className={classes.form} onSubmit={handleSubmit} >
        
          <TextField
            type="text"
            label="Name"
            variant="outlined"
            name="name"
            value={user.name}
            onChange={handleChange}
            fullWidth
            
          />
       
      
          <TextField
            type="number"
            label="Age"
            variant="outlined"
            name="age"
            value={user.age}
            onChange={handleChange}
            fullWidth
          />
        
        <FormControl className={classes.formControl}>
          <InputLabel id="gender">Gender</InputLabel>
          <Select labelId="gender" id="gender" name="gender" value={user.gender} onChange={handleGenderChange} fullWidth>
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
            <MenuItem value="Prefer not to say">Prefer not to say</MenuItem>
          </Select>
        </FormControl>
        <div>
          <Button variant="contained" color="primary" type="submit" >{userId !== null ? "Update" : "Add"}</Button>
        </div>
        
      </form>
      </Paper>
    </Grid>
  );
};

export default UserDetailsForm;
