import React, { Component } from "react";
import UserCardHeader from "../molecules/UserCardHeader";
import { shape, string } from "prop-types";
import styled from "styled-components";

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
