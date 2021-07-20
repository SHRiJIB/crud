import React, { useEffect, useState } from "react";
import "./styles.css";


interface UserInterface {
  name:string,
  age?:string,
  gender?:string
}

interface Props {
  Users : UserInterface[],
  setUsers: (Users:UserInterface[]) => void,
  userId:number | null,
  setUserId:(id:number | null) => void,
}
const UserDetailsForm : React.FC<Props> = ({ Users, setUsers, userId, setUserId }) => {
  const [user, setUser] = useState<UserInterface>({
    name: "",
    age: "",
    gender: "",
  });

  const currentUser = userId !== null ? Users[userId] : null;

  const handleChange = (e : React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

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
            type="number"
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
            <option value="">select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="">Prefer not to say</option>
          </select>
        </div>
        <button type="submit">{userId !== null ? "Update" : "Add"}</button>
      </form>
    </div>
  );
};

export default UserDetailsForm;