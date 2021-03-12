import React from "react";
import { node, string } from "prop-types";
import styled, { withTheme } from "styled-components";

const Link = styled.a`
  color: ${(props) => props.theme.colors.text[props.color]};
  text-decoration: none;
  font-size: 1.125rem;
  font-weight: 200;
  width: 100%;
  display: block;
  text-align: ${(props) => props.align};
`;

const SdLink = (props) => {
  const { path, children, color, align } = props;
  return (
    <Link href={path} color={color} align={align}>
      {children}
    </Link>
  );
};

SdLink.propTypes = {
  path: string.isRequired,
  children: node,
  color: string.isRequired,
  align: string,
};

SdLink.defaultProps = {
  path: "/",
  color: "primary",
  align: "left",
};

export default withTheme(SdLink);
