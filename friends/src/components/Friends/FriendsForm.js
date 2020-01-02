import React, { useState } from "react";
import { axiosWithAuth } from "../Auth/axiosWithAuth";

const FriendsForm = props => {
  const [friend, setFriend] = useState({
    name: "",
    age: "",
    email: ""
  });
  const handleChanges = e => {
    setFriend({
      ...friend,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post(`/friends`, friend)
      .then(response => {
        props.history.push("/friends");
      })
      .catch(err => console.log(err));
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="name"
        onChange={handleChanges}
        value={friend.name}
      />
      <input
        type="text"
        name="age"
        placeholder="age"
        onChange={handleChanges}
        value={friend.age}
      />
      <input
        type="text"
        name="email"
        placeholder="email"
        onChange={handleChanges}
        value={friend.email}
      />
      <button>Add New Friend</button>
    </form>
  );
};

export default FriendsForm;
