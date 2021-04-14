import React from "react";
import PropTypes, { node } from "prop-types";
import styled, { withTheme } from "styled-components";
import { string } from "@redux-saga/is";

const StyledButton = styled.button`
  padding: 1rem 3rem;
  background-color: ${(props) => props.theme.colors[props.color].main};
  color: ${(props) => props.theme.colors[props.color].contrastText};
  border: none;
  font-size: 1.125rem;
  font-weight: 300;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.8);
    color: ${(props) => props.theme.colors[props.color].main};
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 3px solid ${(props) => props.theme.colors.black};
  }
`;

const Button = (props) => {
  const { children, onClick, color } = props;
  return (
    <StyledButton onClick={onClick} color={color} {...props}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: node.isRequired,
  color: string,
  onClick: PropTypes.func,
};

export default withTheme(Button);
