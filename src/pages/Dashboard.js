import React from "react";
import { Link } from "react-router-dom";
import Routes from "../Routes";

const Dashboard = () => {
  return (
    <div>
      <div>Header</div>
      <div>
        <ul>
          <Link to="/dashboard/users">Home</Link>
          <Link to="/dashboard/create-user">Create User</Link>
          <Link to="/dashboard/logout">Logout</Link>
        </ul>
      </div>
      <div>
        <Routes />
      </div>
    </div>
  );
};

export default Dashboard;
