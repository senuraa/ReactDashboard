import * as Constants from "../Constants";
import Users from "../../pages/Users";
import CreateUser from "../../pages/CreateUser";

const RouteArray = [
  {
    path: Constants.ROUTE_USERS,
    component: Users,
    title: "Home",
    icon: "home",
  },
  {
    path: Constants.ROUTE_CREATE_USERS,
    component: CreateUser,
    title: "Create User",
    icon: "user",
  },
  {
    path: Constants.ROUTE_LOGOUT,
    title: "Logout",
    icon: "sign-out-alt",
  },
];
export default RouteArray;
