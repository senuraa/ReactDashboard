import React, { Component } from "react";
import styled, { withTheme } from "styled-components";
import HamburgerMenuButton from "../molecules/HamburgerMenuButton";
import { object } from "prop-types";

const HeaderWrap = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary.main};
`;

class Header extends Component {
  render() {
    return (
      <HeaderWrap props={this.props}>
        <HamburgerMenuButton />
      </HeaderWrap>
    );
  }
}

Header.propTypes = {
  theme: object.isRequired,
};

export default withTheme(Header);
