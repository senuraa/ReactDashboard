import React, { Component } from "react";
import UserCardHeader from "../molecules/UserCardHeader";
import { shape, string } from "prop-types";
import styled from "styled-components";

const CardWrap = styled.div``;

const CardBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Avatar = styled.img`
  border-radius: 50%;
  background-color: #f2efea;
`;

class UserCard extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const { firstName, lastName } = this.props.user;
    return (
      <CardWrap>
        <UserCardHeader
          firstName={firstName}
          lastName={lastName}
          onClick={this.handleClick}
        />
        <CardBody>
          <Avatar
            src="//joeschmoe.io/api/v1/jon"
            alt={`${firstName} ${lastName}`}
          />
        </CardBody>
      </CardWrap>
    );
  }

  handleClick() {
    //TODO: Delete User, get _id from user
  }
}

UserCard.propTypes = {
  user: shape({
    firstName: string,
    lastName: string,
  }),
};

export default UserCard;
