import React from "react";
import UserCardHeader from "./UserCardHeader";
import { shape, string } from "prop-types";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deleteUser as actionDeleteUser } from "../../actions/users";
import { deleteUser } from "../../api/users";

const CardWrap = styled.div`
  margin: 1rem;
  box-shadow: 0 10px 20px rgb(0 0 0 / 19%), 0 6px 6px rgb(0 0 0 / 23%);
  border-radius: 0.4rem;
  overflow: hidden;
`;

const CardBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const Avatar = styled.img`
  border-radius: 50%;
  background-color: #f2efea;
`;

const UserCard = (props) => {
  const { firstName, lastName, _id } = props.user;
  const dispatch = useDispatch();
  const onDelete = (id) => {
    //ignored promise due to bad UX when waiting
    deleteUser(id);
    dispatch(actionDeleteUser(id));
  };
  return (
    <CardWrap>
      <UserCardHeader
        firstName={firstName}
        lastName={lastName}
        onClick={() => onDelete(_id)}
      />
      <CardBody>
        <Avatar
          src="//joeschmoe.io/api/v1/jon"
          alt={`${firstName} ${lastName}`}
        />
      </CardBody>
    </CardWrap>
  );
};

UserCard.propTypes = {
  user: shape({
    firstName: string,
    lastName: string,
  }),
};

export default UserCard;
