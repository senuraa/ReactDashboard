import React, { Component } from "react";
import { connect } from "react-redux";
import { func, shape, string } from "prop-types";
import { Row, Col, Container } from "react-grid-system";
import { getUsers } from "../actions/users";
import Typography from "../components/atoms/Typography";
import UserCard from "../components/organisms/UserCard";
import styled from "styled-components";

const DepTitle = styled(Typography)`
  margin: 1rem;
`;

class Users extends Component {
  constructor(props) {
    super(props);
    this.createUsersList = this.createUsersList.bind(this);
  }

  componentDidMount() {
    this.props.getUsers();
  }

  createUsersList() {
    const { isLoading, isFailed, data } = this.props.users;
    let deps = [];
    if (!isLoading && !isFailed && data.length > 0) {
      let usersGrouped = data.reduce((r, a) => {
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
          <>
            <Row>
              <Col>
                <DepTitle color={"quaternary"} variant={"h3"}>
                  {dep}
                </DepTitle>
              </Col>
            </Row>
            <Row key={`${dep}`}>{users}</Row>
          </>
        );
      });
      return deps;
    }
  }

  render() {
    const { isLoading, isFailed, data } = this.props.users;
    if (!isLoading && !isFailed && data.length > 0) {
      return <Container>{this.createUsersList()}</Container>;
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
  }
}

Users.propTypes = {
  users: shape({
    test: string,
  }),
  getUsers: func,
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps, { getUsers })(Users);
