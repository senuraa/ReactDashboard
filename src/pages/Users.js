import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../actions/users";
import { Col, Container, Row } from "react-grid-system";
import UserCard from "../components/molecules/UserCard";
import styled from "styled-components";
import Typography from "../components/atoms/Typography";

const DepTitle = styled(Typography)`
  margin: 1rem;
`;

const createUsersList = (users) => {
  let deps = [];
  let usersGrouped = users.reduce((r, a) => {
    r[a.departmentName] = r[a.departmentName] || [];
    r[a.departmentName].push(a);
    return r;
  }, Object.create(null));
  Object.keys(usersGrouped).map((dep) => {
    let users = [];
    usersGrouped[dep].map((user) => {
      users.push(
        <Col sm={3} key={user._id}>
          <UserCard user={user} />
        </Col>
      );
    });
    deps.push(
      <div key={`${dep}_title`}>
        <Row>
          <Col>
            <DepTitle color={"quaternary"} variant={"h3"}>
              {dep}
            </DepTitle>
          </Col>
        </Row>
        <Row key={`${dep}`}>{users}</Row>
      </div>
    );
  });
  return deps;
};

const Users = () => {
  const users = useSelector((state) => state.users);
  const { data, isLoading, isFailed } = users;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  if (!isLoading && !isFailed && data.length > 0) {
    return <Container>{createUsersList(data)}</Container>;
  } else if (isLoading) {
    return (
      <Typography color={"primary"} variant={"h1"} align={"center"}>
        Loading...
      </Typography>
    );
  } else {
    return (
      <Typography color={"primary"} variant={"h1"} align={"center"}>
        Failed
      </Typography>
    );
  }
};

Users.propTypes = {};

export default Users;
