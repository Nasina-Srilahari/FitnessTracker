import React from "react";
import ReactDOM from "react-dom";
import Profile from "./Profile";
import "./index.css";
// const Profile = React.lazy(()=>import("Profile/Profile"));
const App = () => (
  <div className="container">
    <Profile />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
