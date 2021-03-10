import * as Constants from "../Constants";
import Users from "../../pages/Users";
import CreateUser from "../../pages/CreateUser";

const RouteArray = [
  {
    path: Constants.ROUTE_USERS,
    component: Users,
    title: "Home",
  },
  {
    path: Constants.ROUTE_CREATE_USERS,
    component: CreateUser,
    title: "Create User",
  },
  {
    path: Constants.ROUTE_LOGOUT,
    title: "Logout",
  },
];
export default RouteArray;
