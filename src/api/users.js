import axios from "axios";
import { API_USERS } from "../config/Constants";

export const getUsers = () => {
  return axios.get(API_USERS);
};
