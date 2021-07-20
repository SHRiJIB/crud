import React, { useState } from "react";
import Users from "../../components/Users/Users";
import Form from "../../components/Form/UserDetailsForm";
import "./styles.css";

interface UserInterface {
  name:string,
  age?:string,
  gender?:string
}
const UserDetails = () => {
  const [users, setUsers] = useState<UserInterface[]>([]);
  const [userId, setUserId] = useState<number | null>(null);
  return (
    <div className="container">
      <div className="col">
        <Users Users={users} setUsers={setUsers} setUserId={setUserId} />
      </div>
      <div className="col">
        <Form
          Users={users}
          
          setUsers={setUsers}
          userId={userId}
          setUserId={setUserId}
        />
      </div>
    </div>
  );
};

export default UserDetails;
