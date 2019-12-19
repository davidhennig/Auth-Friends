import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../Auth/axiosWithAuth";
import FriendsCard from "./FriendsCard";

const Friends = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get("/friends")
      .then(response => {
        setFriends(response.data);
      });
  }, [friends]);
  return (
    <div>
      {friends.map(element => {
        return (
          <FriendsCard
            key={element.id}
            name={element.name}
            age={element.age}
            email={element.email}
          />
        );
      })}
    </div>
  );
};

export default Friends;
