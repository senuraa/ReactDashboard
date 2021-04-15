import axios from "axios";
import { API_USERS } from "../config/Constants";

export const getUsers = () => {
  return axios.get(API_USERS);
};

export const createUser = (user) => {
  return axios.post(API_USERS, user);
};

export const deleteUser = (id) => {
  const deleteUrl = `${API_USERS}/${id}`;
  return axios.delete(deleteUrl);
};
