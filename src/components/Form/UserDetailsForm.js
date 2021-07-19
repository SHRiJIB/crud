import React, { useEffect, useState } from "react";
import "./styles.css";

const UserDetailsForm = ({ Users, setUsers, userId, setUserId }) => {
  const [user, setUser] = useState({
    name: "",
    age: "",
    gender: "select your gender",
  });

  const currentUser = userId !== null ? Users[userId] : null;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentUser) {
      setUsers((prev) =>
        prev.map((oldUser, index) => (index === userId ? user : oldUser))
      );
    } else {
      if (user.name.length > 0 || user.age.length > 0 || user.gender.length > 0)
        setUsers([...Users, user]);
    }
    clear();
  };

  const clear = () => {
    setUserId(null);
    setUser({
      name: "",
      age: "",
      gender: "select your gender",
    });
  };

  useEffect(() => {
    if (currentUser) setUser(currentUser);
  }, [currentUser]);
  return (
    <div className="form-container">
      <h1>Fill up the details</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="input-field">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            placeholder="Your name"
            id="name"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </div>
        <div className="input-field">
          <label htmlFor="age">Age:</label>
          <input
            type="text"
            placeholder="Your age"
            id="age"
            name="age"
            value={user.age}
            onChange={handleChange}
          />
        </div>
        <div className="input-field">
          <label htmlFor="gender">Gender:</label>
          <select
            name="gender"
            id="gender"
            value={user.gender}
            onChange={handleChange}
          >
            <option value="null">select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="null">Prefer not to say</option>
          </select>
        </div>
        <button type="submit">{userId !== null ? "Update" : "Add"}</button>
      </form>
    </div>
  );
};

export default UserDetailsForm;
