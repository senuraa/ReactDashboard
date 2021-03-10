import React from "react";
import { Link } from "react-router-dom";
import Routes from "../config/routes/Routes";
import RouteArray from "../config/routes/RouteConfig";

const Dashboard = () => {
  return (
    <div>
      <div>Header</div>
      <div>
        <ul>
          {RouteArray.map((route, index) => {
            return (
              <Link to={route.path} key={index}>
                {route.title}
              </Link>
            );
          })}
        </ul>
      </div>
      <div>
        <Routes />
      </div>
    </div>
  );
};

export default Dashboard;
