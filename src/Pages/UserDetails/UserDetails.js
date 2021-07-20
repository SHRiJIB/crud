import React, { useState } from "react";
import Users from "../../components/Users/Users";
import Form from "../../components/Form/UserDetailsForm";
import "./styles.css";
import Test from "../../Test";

const UserDetails = () => {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState(null);
  return (
    <div className="container">
      <Test Users={users} />
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
