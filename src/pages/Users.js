import React, { Component } from "react";
import { connect } from "react-redux";
import { func, shape, string } from "prop-types";
import { getUsers } from "../actions/users";

class Users extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return <div>{JSON.stringify(this.props.users.data)}</div>;
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
