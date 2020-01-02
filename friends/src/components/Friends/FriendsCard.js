import React from "react";

const FriendsCard = props => {
  return (
    <div>
      <h2>{props.name}</h2>
      <h3>{props.age}</h3>
      <h4>{props.email}</h4>
    </div>
  );
};

export default FriendsCard;
