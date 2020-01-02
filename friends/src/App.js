import React from "react";
import "./App.css";
import PrivateRoute from "./components/Auth/PrivateRoute";
import Friends from "./components/Friends/Friends";
import FriendsForm from "./components/Friends/FriendsForm";
import Login from "./components/Auth/Login";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path="/login" component={Login} />
      <PrivateRoute path="/addfriends" component={FriendsForm} />
      <PrivateRoute path="/friends" component={Friends} />
    </div>
  );
}

export default App;
